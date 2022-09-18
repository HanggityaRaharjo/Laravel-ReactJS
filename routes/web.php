<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\CobaHooksController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/',[NewsController::class,'index'])->name('home');
Route::post('/news',[NewsController::class,'store'])->middleware(['auth', 'verified'])->name('create.news');
Route::get('/news',[NewsController::class,'show'])->middleware(['auth', 'verified'])->name('my.news');
Route::get('/news/edit',[NewsController::class,'edit'])->middleware(['auth', 'verified'])->name('edit.news');
Route::post('/news/update',[NewsController::class,'update'])->middleware(['auth', 'verified'])->name('update.news');
Route::post('/delete/update',[NewsController::class,'destroy'])->middleware(['auth', 'verified'])->name('delete.news');

Route::get('/Coba',[CobaHooksController::class,'index'])->name('coba');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';
