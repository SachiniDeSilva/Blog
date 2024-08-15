const Post = require('../models/postModle');
const User = require('../models/userModels');
const path = require('path');
const fs = require('fs');
const { v4: uuid } = require('uuid');
const HttpError = require('../models/errorModel');

// Create a new post
const createPost = async (req, res, next) => {
    try {
        let { title, category, desc } = req.body;
        if (!title || !category || !req.files || !desc) {
            return next(new HttpError("Fill in all fields and choose a thumbnail", 422));
        }
        const { thumbnail } = req.files;
        // Check the file size
        if (thumbnail.size > 2000000) {
            return next(new HttpError("Thumbnail too big. File should be less than 2MB.", 422));
        }
        let fileName = thumbnail.name;
        let splittedFilename = fileName.split('.');
        let newFilename = splittedFilename[0] + uuid() + "." + splittedFilename[splittedFilename.length - 1];
        thumbnail.mv(path.join(__dirname, '..', '/uploads', newFilename), async (err) => {
            if (err) {
                return next(new HttpError(err.message, 500));
            } else {
                const newPost = await Post.create({ title, category, desc, thumbnail: newFilename, creator: req.user.id });
                if (!newPost) {
                    return next(new HttpError("Post could not be created", 422));
                }
                // Find user and increase post count by 1
                const currentUser = await User.findById(req.user.id);
                const userPostCount = currentUser.posts + 1;
                await User.findByIdAndUpdate(req.user.id, { posts: userPostCount });

                res.status(201).json(newPost);
            }
        });
    } catch (error) {
        return next(new HttpError(error.message, 500));
    }
};

// Get all posts
const getPosts = async (req, res, next) => {
    try {
        const posts = await Post.find().sort({ updatedAt: -1 });
        res.status(200).json(posts);
    } catch (error) {
        return next(new HttpError(error.message, 500));
    }
};

// Get a single post
const getPost = async (req, res, next) => {
    try {
        const postId = req.params.id;
        const post = await Post.findById(postId);
        if (!post) {
            return next(new HttpError("Post not found", 404));
        }
        res.status(200).json(post);
    } catch (error) {
        return next(new HttpError(error.message, 500));
    }
};

// Get posts of a particular category
const getCatPost = async (req, res, next) => {
    try {
        const { category } = req.params;
        const catPosts = await Post.find({ category }).sort({ createdAt: -1 });
        res.status(200).json(catPosts);
    } catch (error) {
        return next(new HttpError(error.message, 500));
    }
};

// Get user's posts
const getUserposts = async (req, res, next) => {
    try {
        const userPosts = await Post.find({ creator: req.user.id }).sort({ createdAt: -1 });
        res.status(200).json(userPosts);
    } catch (error) {
        return next(new HttpError(error.message, 500));
    }
};

// Edit post
const editPost = async (req, res, next) => {
    res.json("Edit post");
};

// Delete post
const deletePost = async (req, res, next) => {
    res.json("Delete post");
};

module.exports = { createPost, getPosts, getPost, getCatPost, getUserposts, editPost, deletePost };
