import React from 'react';
import './CreatePost.css'
import { supabase } from '../client';

const CreatePost = () => {
const createPost = async (event)=>{
    event.preventDefault()
    console.log(event)

    let {data,error } = await supabase
        .from('Posts')
        .insert([{title: event.target[0].value, author: event.target[1].value, description: event.target[2].value}])
        .select();
    if(error){
        console.log(error)
    }
        
    
        window.location = "/";
}
    return (
        <div>
            <form onSubmit={createPost} >
                <label for="title">Title</label> <br />
                <input required type="text" id="title" name="title" /><br />
                <br/>

                <label for="author">Author</label><br />
                <input required type="text" id="author" name="author" /><br />
                <br/>

                <label for="description">Description</label><br />
                <textarea required rows="5" cols="50" id="description">
                </textarea>
                <br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default CreatePost