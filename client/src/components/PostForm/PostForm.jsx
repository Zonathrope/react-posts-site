import React, {useState} from 'react';

const PostForm = ({setPosts}) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')


    const btnClickHandler = (e) => {
        e.preventDefault();
        const post = {
            id: Date.now(),
            name: name,
            description: description,
        }
        if (post.name !== '' && post.description !== '') {
            setPosts((prev) => [...prev, post])
        }
        setName('')
        setDescription('')
    }

    return (
        <div>
            <form className="form-create">
                <label htmlFor="postName">Post name: </label>
                <input value={name} onChange={event => setName(event.target.value)} type="text" id="postName"
                       name="postName"/>

                <label htmlFor="postDescription">Post description: </label>
                <input value={description} onChange={event => setDescription(event.target.value)} type="text"
                       id="postDescription" name="postDescription"/>

                <button className="btn waves-effect waves-light" type="submit" onClick={btnClickHandler}>
                    Create post
                </button>
            </form>
        </div>
    );
};

export default PostForm;