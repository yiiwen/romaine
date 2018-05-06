<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class InfoController extends Controller
{
    public function aboutUs() {
        return view('info.aboutUs');
    }

    public function contactUs() {
        return view('info.contactUs');
    }
}
