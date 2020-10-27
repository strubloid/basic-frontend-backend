<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('welcome');
});

Route::post('add', 'TaskController@add');

Route::get('get', 'TaskController@get');

Route::post('delete', 'TaskController@delete');

Route::post('getone', 'TaskController@getone');

