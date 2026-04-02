<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('Contact', [
            'orderType'    => $request->query('orderType'),
            'productId'    => $request->query('productId'),
            'productName'  => $request->query('productName'),
            'productPrice' => $request->query('productPrice'),
        ]);
    }

    public function send(Request $request)
    {
        $request->validate([
            'name'    => 'required|string|max:255',
            'email'   => 'required|email|max:255',
            'message' => 'required|string',
        ]);

        // TODO: Mail::to('placeholder@nailsalon.com')->send(...)

        return back()->with('success', 'Message sent successfully!');
    }
}
