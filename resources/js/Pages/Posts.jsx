import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import axios from 'axios'
// import {Link} from '@inertiajs/react'
export default function Posts({posts}){
  function getPage(event,page){
    event.preventDefault();
    axios.get(`http://xeberler.test/posts/?page=${page}`).then(res=>{
        news = res.data
    })
  }
    console.log(posts);
    return (
        <>
  


        <motion.div
        initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mt-7">

            {posts.data.map(post=>(
                
                <Link href={`/posts/${post.id}`} className="text-bold text-gray-700 my-2">
                <div key={post.id}>
                    <div className="border border-amber-700 my-2 p-1 ">
                        <p className="text-gray-500 hover:text-gray-700  shadow-amber-800">{post.body}</p>
                        <hr />
                        <p className="text-end">Posted on: {new Date(post.created_at).toLocaleDateString()}</p>
                    </div>
                    
                </div>
                </Link>
            ))}
            
              </motion.div>
            <div className="p-2 flex space-x-2 justify-end mr-3">
                {posts.links.map((link, index) => (
                    link.url ? (
                        <Link 
                            key={index}
                            href={`?page=${link.page}`}
                            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                     )
                     : 
                     (
                        <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 rounded text-gray-400"
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                    )
                ))}
            </div>

        </>
    )
}