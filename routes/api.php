<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| ApI Routes
|--------------------------------------------------------------------------
|
| Here is where you can register ApI routes for your application. These
| routes are loaded by the RouteServiceprovider within a group which
| is assigned the "api" middleware group. Enjoy building your ApI!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
