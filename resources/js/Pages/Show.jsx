import { Link } from "@inertiajs/react";
import Posts from "./Posts";

export default function Show({ post,posts }) {
    console.log(post);
    return (
        <>
           <div key={post.id} >
                        <h1 className="p-3 text-center text-5xl text-gray-900 font-bold shadow-sm">Post</h1>
                        <p className='px-2 py-1'>{post.body}</p>
                        <p className="text-end px-2 py-1 ">Posted on: {new Date(post.created_at).toLocaleDateString()}</p>

                    </div>

                    <h1 className="p-3 text-start text-3xl text-gray-900 font-bold shadow-sm">Son xeberler</h1>

                    <div className="mx-auto">
                        <Posts posts={posts}/>
                    </div>
        </>
    );
}
