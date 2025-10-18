<?php

namespace App\Providers;

use App\Contracts\PostServiceInterface;
use App\Models\Post;
use App\Services\PostService;
use Illuminate\Support\ServiceProvider;

class ContainerizationProvider extends ServiceProvider
{


    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind(PostServiceInterface::class,function($app){
             return new PostService(new Post());
        });
    }  

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
