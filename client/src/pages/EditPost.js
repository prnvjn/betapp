import React, {useState}from 'react';
import { useParams } from 'react-router-dom';
import './EditPost.css'
import { supabase } from '../client';
const EditPost = ({data}) => {

    const {id} = useParams();
    const post = data.filter(item => item.id === id)[0];
    const [updatePost,setUpdatePost] = useState({...post})
    


const updatedPost = async (event) => {
    event.preventDefault();

    await supabase
    .from('Posts')
    .update({ title: updatePost.title, author: updatePost.author,  description: updatePost.description})
    .eq('id', id);

    window.location = "/";
}
const deletePost = async (event) => {
    event.preventDefault();

    await supabase
    .from('Posts')
    .delete()
    .eq('id', id); 

    window.location = "/";
}


    return (
        <div>
            <form onSubmit={updatedPost}>
                <label for="title">Title</label> <br />
                <input type="text" id="title" name="title" value={updatePost.title} onChange={(e)=>{setUpdatePost({...updatePost,title:e.target.value})}} /><br />
                <br/>

                <label for="author">Author</label><br />
                <input type="text" id="author" name="author" value={updatePost.author} onChange={(e)=>{setUpdatePost({...updatePost,author:e.target.value})}}/><br />
                <br/>

                <label for="description">Description</label><br />
                <textarea rows="5" cols="50" id="description" value={updatePost.description} onChange={(e)=>{setUpdatePost({...updatePost,description:e.target.value})}}  >
                </textarea>
                <br/>
                <input type="submit" value="Submit"  />
             
                <button className="deleteButton" onClick={deletePost}>Delete</button>
            </form>
        </div>
    )
}

export default EditPost