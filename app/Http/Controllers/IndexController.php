<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class IndexController extends Controller
{
    
    public function index() {
        
        //return view('index.index',['website'=>config('website.siteTitle')]);

        return static_view('index.index');
    } 
}
