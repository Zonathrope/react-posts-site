import React from 'react';
import styles from './PostItem.module.css'

const PostItem = ({post, removePost, number}) => {


    return (
        <li className={styles.post}>
            <div>
                <p style={{fontSize: '24px'}}>{number+1}. {post.name}</p>
                <p>{post.description}</p>
            </div>
            <button className="waves-effect waves-light btn-small red darken-4" onClick={() => removePost(post)}>delete</button>
        </li>
    );
};

export default PostItem;