
import { useForm } from "@inertiajs/react";
import { Link } from '@inertiajs/react';
export default function Create() {
    const { post, processing, errors, data, setData } = useForm({
        body: ''

    });

    function submit(e) {
          e.preventDefault();
        post('/posts')
    }

    return (
        <>
            <h1 className="text-center font-bold text-3xl ">Create a new Post</h1>

            <div className="w-1/2 mx-auto">
                <form className=" flex flex-col justify-center items-center p-2" onSubmit={submit}>

                    <textarea
                        name="body"
                        id="body"
                        rows="5"
                        className={
                            errors.body
                                ? "rounded-sm border-2 border-red-500 mx-auto min-w-full"
                                : "rounded-sm border-2 border-blue-700 mx-auto min-w-full"
                        }
                        value={data.body}
                        onChange={(e) => setData("body", e.target.value)}
                    ></textarea>
                    {errors.body && <p>{errors.body}</p>}
                    <button className={`mt-4 p-2 rounded-sm min-w-full text-white ${processing ? "bg-gray-400" : "bg-blue-600"
                        }`}
                        disabled={processing}
                    >Submit</button>
                </form>
            </div>
        </>
    )
}