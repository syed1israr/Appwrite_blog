
import appwriteService from "../appwrite/config.js"
import {Link} from "react-router-dom"
import "./post_card.css"

function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`}>

<div className='w-full bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm post_card'>
    <div className='w-full  mb-6  ' >
        <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className='w-full h-auto rounded-t-lg' />
    </div>
    <h2 className='text-xl font-semibold text-gray-800 px-4 pb-2'>{title}</h2>
</div>


    </Link>
  )
}


export default PostCard