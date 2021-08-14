import React from 'react';
import PostItem from "../PostItem/PostItem";

const PostList = ({posts, setPosts}) => {
    const removePost = (remPost) => {
        setPosts(posts.filter(post => post.id !== remPost.id))
    }

    return (<ul>
        {posts.map((post, id) => <PostItem removePost={removePost} post={post} number={id} key={post.id}/>)}
    </ul>)
};

export default PostList;