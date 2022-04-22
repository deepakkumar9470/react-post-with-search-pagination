import React from 'react'


const Post = ({post}) => {

  return (
      <div className='post_wrapper'>
            <div className="post_text">
                <span className="post_id">Post ID: {post.id}</span>
                <h2 className='post_head'>{post.title} </h2>
                <p className='post_deacription'> {post.body}</p>
                <span className='user_id'>User Id: {post.userId}</span>
                    
            </div>
            
         </div>
  )
}

export default Post