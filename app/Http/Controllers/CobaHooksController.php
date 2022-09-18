<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Controller;


class CobaHooksController extends Controller
{
    public function index(){
        return Inertia::render('CobaHooks');
    }
}
