<?php

namespace App\Http\Controllers;

use App\Models\Post;
// use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use App\Contracts\PostServiceInterface;
use Inertia\Response;
use Inertia\ResponseFactory;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request,PostServiceInterface $service):
    Response|ResponseFactory
    {
        $page = $request->query('page',1);
        $perPage = 10;
        $posts = $service->getPerPage($page,$perPage);

        return inertia('Posts',['posts'=>$posts]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

       $fields =  $request->validate([
            'body'=>['required']
        ]);
        // Qadağan olunmuş sözlər siyahısı
    $forbiddenWords = ['pis', 'söyüş1', 'söyüş2', 'nifret', 'haram', 'şərəfsiz', 'fuck', 'bitch'];

    // body daxilində bu sözlər varsa, error qaytarırıq
    foreach ($forbiddenWords as $badWord) {
        if (stripos($fields['body'], $badWord) !== false) {
            return back()->withErrors([
                'body' => "$badWord sozunu elave ede bilmezsiniz! "
            ])->withInput();
        }
    }


        Post::create($fields);
        // return inertia('About');
       return redirect()->route('posts.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        $posts = Post::latest()->paginate(5);
        return inertia('Show',['post'=>$post,'posts' => $posts ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePostRequest $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        //
    }
}
