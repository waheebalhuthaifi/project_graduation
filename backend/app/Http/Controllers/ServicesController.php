<?php

namespace App\Http\Controllers;

use Exception;
use Pusher\Pusher;
use App\Models\User;
use App\Models\Category;
use App\Models\Services;
// use Illuminate\Support\Facades\Request;
use App\Events\EventService;
use Illuminate\Http\Request;
use Laravel\Sanctum\Sanctum;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\StoreServicesRequest;
use App\Http\Requests\UpdateServicesRequest;
use Illuminate\Support\Facades\Notification;
use App\Notifications\NewNotificationService;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class ServicesController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function filterService(Request $request)
    {
        $selectedCategories = $request->input('selectedCategories', []);
        $searchTerm = $request->input('searchTerm', '');

        $query = Services::query();

        if ($selectedCategories) {
            $query->whereIn('category', $selectedCategories);
        }

        if ($searchTerm) {
            $query->where('name', 'like', '%' . $searchTerm . '%');
        }

        $filteredServices = $query->get();

        return response()->json($filteredServices);
    }
    public function index()
    {
        // $services = Services::all();
        $services = Services::with('users')->get();
        // dd($services);

        return response()->json($services);
    }
    public function getServicesPending()
    {
        // $services = Services::all();
        $services = Services::where('type','pending')->get();
        // dd($services);

        return response()->json($services);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreServicesRequest $request)
    {
        try {
            $validatedData = $request->validated();

            $service = new Services;
            $service->title = $validatedData['title'];
            $service->description = $validatedData['description'];
            // $service->category_id = $validatedData['category_id']; // Optional
            $service->price = $validatedData['price'];
            $service->delivery_time = $validatedData['delivery_time'];
            $service->category_id = $validatedData['category_id'];
            $user = auth()->user();

            if ($user) {
                $service->user_id = Auth::user()->id;
                if ($request->hasFile('file')) {
                    $image = $request->file('file');
                    $filename = time() . '_' . $image->getClientOriginalName();
                    $imageUrl =  $image->move('Image_Services', $filename);
                    $service->image = $imageUrl;

                    // return response()->json(['message' => 'Image uploaded successfully!']);
                } else {
                    throw new Exception('Error uploading image. Please ensure a valid image is selected.', 422); // 422: Unprocessable Entity
                }



                if ($service->save()) {
                    // Notification::send(User::all(), new NewNotificationService($service));
                    $message="تم اضافه الخدمه بنجاح";
                    $user->notify(new NewNotificationService($message, $service->id, Auth::user()->id));





                    return response()->json(['message' => 'Service created successfully!', 'data' => $service], 201); // 201: Created
                } else {
                    throw new Exception('Failed to create service. Please try again.', 500); // 500: Internal Server Error
                }
            } else {
                throw new Exception('User is not authenticated.', 401); // 401: Unauthorized
            }
        } catch (Exception $e) {
            return response()->json(['errors' => $e->getMessage()], $e->getCode());
        }
    }



    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        try {
            $service = Services::with('category')->findOrFail($id);
            $categories = Category::all();

            return response()->json([
                'service' => $service,
                'categories' => $categories
            ]);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to fetch service'], 500);
        }
    }
    public function search(Request $request ,$name)
    {
        // $query = $request->input('search');

        $services = Services::with('users')->where('title', 'like', "%{$name}%")->get();

        return response()->json($services);
    }

    public function getUserServices($user_id)
    {
        try {
            $services = Services::where('user_id', $user_id)->get();

            return response()->json($services);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to fetch services'], 500);
        }
    }
    public function filterServices(Request $request )
    {
        $categoryId = $request->input('categoryIds'); // Assuming 'categoryIds' is sent from ReactJS

        if (!$categoryId) {
            return Services::with(['category', 'users'])->get()->select('id', 'title', 'image', 'description'); // Return all services if no category is selected
        }

        $categoryIds = explode(',', $categoryId); // Convert comma-separated string to array

        $services = Services::with(['category', 'users'])
            ->whereHas('category', function ($query) use ($categoryIds) {
                $query->whereIn('name', $categoryIds); // Filter by category names (multiple)
            })->get();


        return $services->select('id', 'title', 'price', 'image', 'description');
    }
    public function filterServicesCategory(Request $request ,$categoryId ){


        $services = Services::where('category_id', $categoryId)
        ->with(['category', 'users']) // Eager load 'category' and 'user' relationships
        ->get();

  // Sort the services based on a specific criteria (e.g., price, rating)
//   $sortedServices = $services->sortBy('price'); // Sort by price
// dd($services);

  return response()->json(['services' => $services]);

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Services $services)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateServicesRequest $request, $id)
    {
        try {
            // Validate the request data
            // $validatedData = $request->validate([
            //     'title' => 'required|string|max:255',
            //     'description' => 'required|string',
            //     'price' => 'required|numeric|min:0',
            //     'category_id' => 'required|exists:categories,id',
            //     'delivery_time'=>'required',
            //     'file' => 'nullable|image|max:2048', // Optional image field
            // ]);
            $validatedData = $request->validated();

            // Find the service to update based on the ID in the route parameter
            $service = Services::findOrFail($id);
               // Handle image upload

               if ($request->hasFile('file')) {

                $image = $request->file('file');
                $filename = time() . '_' . $image->getClientOriginalName();
                $imageUrl =  $image->move('Image_Services', $filename);
                $service->image = $imageUrl;

                // return response()->json(['message' => 'Image uploaded successfully!']);
            } else {
                throw new Exception('Error uploading image. Please ensure a valid image is selected.', 422); // 422: Unprocessable Entity
            }

            // Update service fields with validated data
            $service->update($validatedData);

            // Return success response with updated service data
            return response()->json(['message' => 'Service updated successfully!', 'data' => $service], 200);
        } catch (Exception $e) {
            // Handle potential errors (e.g., validation errors, database errors)
            return response()->json(['errors' => $e->getMessage()], $e->getCode());
        }
    }
    public function updateStateService(Request $request ,$id){
       
    $service = Services::findOrFail($id);
    $service->update([
        'status' => $request->input('status'),
    ]);

    // إرسال إشعار للمستخدم الذي قدم الخدمة
    // $this->notifyUser($service);

    return response()->json($service);


    }
 


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Services $services, int $id)
    {
        $serviceToDelete = $services->findOrFail($id);

        try {
            $serviceToDelete->delete();

            return response()->json([
                'message' => 'Service deleted successfully.',
                'status' => 200,
            ]);
        } catch (ModelNotFoundException $e) {
            return response()->json([
                'message' => 'Service not found.',
                'status' => 404,
            ], 404);
        } catch (Exception $e) {

            return response()->json([
                'message' => 'Error deleting service.',
                'status' => 500,
            ], 500);
        }
    }

}
