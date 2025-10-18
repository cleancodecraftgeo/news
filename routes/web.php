<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;

Route::get('/',function(){
    return inertia('Home');
});

Route::resource('posts', PostController::class);

Route::get('/about',function(){
    return inertia('About');
});
