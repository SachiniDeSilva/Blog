import React, { useState } from 'react';
import thumbnail1 from '../images/Serene Sunrise with Deer.jpg';
import PostItem from './PostItem';

const Dummy_post = [
  {
    id: '1',
    thumbnail: thumbnail1,
    category: 'education',
    title: 'This is the title',
    desc: 'djednjcnjdcnjfcnjfnjjcjcjncjcej',
    authorID: 3,
  },

  {
    id: '1',
    thumbnail: thumbnail1,
    category: 'education',
    title: 'This is the title',
    desc: 'djednjcnjdcnjfcnjfnjjcjcjncjcej',
    authorID: 3,
  },
  {
    id: '1',
    thumbnail: thumbnail1,
    category: 'education',
    title: 'This is the title',
    desc: 'djednjcnjdcnjfcnjfnjjcjcjncjcej',
    authorID: 3,
  },
  {
    id: '1',
    thumbnail: thumbnail1,
    category: 'education',
    title: 'This is the title',
    desc: 'djednjcnjdcnjfcnjfnjjcjcjncjcej',
    authorID: 3,
  },


  {
    id: '1',
    thumbnail: thumbnail1,
    category: 'education',
    title: 'This is the title',
    desc: 'djednjcnjdcnjfcnjfnjjcjcjncjcej',
    authorID: 3,
  },

  {
    id: '1',
    thumbnail: thumbnail1,
    category: 'education',
    title: 'This is the title',
    desc: 'djednjcnjdcnjfcnjfnjjcjcjncjcej',
    authorID: 3,
  },
  
  {
    id: '1',
    thumbnail: thumbnail1,
    category: 'education',
    title: 'This is the title',
    desc: 'djednjcnjdcnjfcnjfnjjcjcjncjcej',
    authorID: 3,
  },
  
  {
    id: '1',
    thumbnail: thumbnail1,
    category: 'education',
    title: 'This is the title',
    desc: 'djednjcnjdcnjfcnjfnjjcjcjncjcej',
    authorID: 3,
  },

];

const Post = () => {
  const [posts, setPosts] = useState(Dummy_post);
  
  return (
    <section className='posts'>
      <div className='posts_container'>
      {posts.map((post) => (
        <PostItem
          key={post.id}
          postID={post.id}
          thumbnail={post.thumbnail}
          category={post.category}
          title={post.title}
          desc={post.desc}
          authorID={post.authorID}
        />
      ))}
      </div>
    </section>
  );
};

export default Post;
