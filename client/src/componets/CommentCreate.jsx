import { useState } from "react";
import axios from 'axios';

function CommentCreate({postId}){
    const [content, setContent]= useState('');

    const onSubmit= async (e)=>{
        e.preventDefault();
        await axios.post(`http://posts.com/posts/${postId}/comments`,{
            content,
        });
        setContent('');
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="title">New Comment</label>
                    <input 
                        id="title"
                        className="form-control"
                        value={content}
                        onChange={e=>setContent(e.target.value)}
                          />
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default CommentCreate;
