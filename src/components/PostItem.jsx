import React from 'react';
import { Link } from 'react-router-dom';
import PostAuthor from './PostAuthor';

const PostItem = ({ postID, category, title, desc, authorID, thumbnail, createdAt }) => {
  // Add checks to ensure that 'desc' and 'title' are not undefined
  const shortDescription = desc && desc.length > 145 ? desc.substr(0, 145) + '...' : (desc || '');
  const postTitle = title && title.length > 30 ? title.substr(0, 30) + '...' : (title || '');

  return (
    <article className='post'>
      <div className="post_thumbnail">
        <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${thumbnail}`} alt={title} />
      </div>

      <div className="post_content">
        <Link to={`/Posts/${postID}`}>
          <h3>{postTitle}</h3>
        </Link>
        <p dangerouslySetInnerHTML={{ __html: shortDescription }} />
        <div className="post_footer">
          <PostAuthor authorID={authorID} createdAt={createdAt} />
          <Link to={`/Posts/categories/${category}`} className='btn category'>{category}</Link>
        </div>
      </div>
    </article>
  );
};

export default PostItem;
