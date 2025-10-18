<?php

declare(strict_types=1);
namespace App\Services;
use App\Contracts\PostServiceInterface;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Pagination\LengthAwarePaginator;

class PostService implements PostServiceInterface {

    public function __construct(public Model $model){}

    public function getPerPage($page=1,$perPage=10):LengthAwarePaginator{
        return $this->model->newQuery()->latest()
        ->paginate(
            perPage: $perPage,
            page: $page
        );
    }
}
