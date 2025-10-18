<?php
declare(strict_types=1);
namespace App\Contracts;

use Illuminate\Pagination\LengthAwarePaginator;

interface PostServiceInterface{
     function getPerPage($page,$perPage):LengthAwarePaginator;
}
