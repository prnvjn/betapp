import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
// import './ReadPosts.css'
const ReadPosts = (props) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(props.data);
    }, [props]);
    
    return (
        <div className="ReadPosts">
            {
                posts && posts.length > 0 ?
                posts.map((post,index) => 
                   <Card id={post.id} title={post.title} author={post.author} description={post.description} betCount={post.betCount}/>
                ) : <h2>{'No Challenges Yet 😞'}</h2>
            }
        </div>  
    )
}

export default ReadPosts;