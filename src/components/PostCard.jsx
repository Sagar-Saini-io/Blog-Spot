import React from 'react'
import appWriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({$id, title, featuredImage}) {
  console.log("PostCard props:", { $id, title, featuredImage }); // Add this line
  // ... rest of the component code
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4 '>

            <div className='w-full justify-center mb-4' >
                <img src={appWriteService.getFilePreview(featuredImage)} alt={title} 
                className='rounded-xl'
                />
            </div>

            <div>
                <h2 className='text-xl font-bold' >{title}</h2>
            </div>

        </div>
    </Link>
  )
}

export default PostCard