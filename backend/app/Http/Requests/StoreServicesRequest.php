<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class StoreServicesRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }


    public function rules(): array
    {
        return [
            'title' => 'required|string',
            'description' => 'required|string',
            'price' => 'required',
            'delivery_time' => 'required',
            'file' => [
                'required',
                // 'image', // Validate as image
                // Rule::dimensions()->maxWidth(1024)->maxHeight(1024), // Adjust dimensions as needed
                'mimetypes:image/jpeg,image/png,image/jpg,image/bmp', // Supported image formats
                // 'max:2048', // Maximum file size in kilobytes (adjust as needed)
            ],
            'category_id'=>'required'
            // 'image.*' => 'image|mimes:jpeg,png,jpg,bmp|max:2048' // Supported image formats and maximum size



        ];

    }
}
