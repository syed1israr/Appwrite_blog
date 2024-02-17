import  {useState, useEffect} from "react"
import {  PostCard } from "../Components/index.js"
import appwriteService from "../appwrite/config.js";
import "./Allpost.css"
function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {}, [])
    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })
  return (
    <div className='postCard'>
        
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
          
    </div>
  )
}

export default AllPosts