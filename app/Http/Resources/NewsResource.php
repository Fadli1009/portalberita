<?php

namespace App\Http\Resources;

use App\Models\News;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Resources\Json\ResourceCollection;

class NewsResource extends ResourceCollection
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // return [
        //     'id' => $this->id,
        //     'author' => $this->author,
        //     'category' => $this->category,
        //     'description' => $this->description,
        //     'title' => $this->title,
        //     'created_at' => $this->created_at,
        //     'updated_at' => $this->updated_at
        // ];

        return [
            'data' => $this->collection
        ];
    }
}
