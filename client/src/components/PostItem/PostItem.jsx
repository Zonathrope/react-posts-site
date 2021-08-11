import React from 'react';
import styles from './PostItem.module.css'

const PostItem = ({post, removePost}) => {
    return (
        <li className={styles.post}>
            <div>
                <p style={{fontSize: '24px'}}>{post.name}</p>
                <p>{post.description}</p>
            </div>
            <button onClick={() => removePost(post)}>delete</button>
        </li>
    );
};

export default PostItem;