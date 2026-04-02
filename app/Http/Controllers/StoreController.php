<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Product;

class StoreController extends Controller
{
    //
    public function show($id)
    {
        $product = Product::findOrFail($id);

        return Inertia::render('ProductDetails', [
            'product' => $product,
        ]);
    }
}
