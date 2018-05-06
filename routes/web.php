<?php


Route::get('/', 'IndexController@index');
Route::get('/index','IndexController@index');
Route::get('/case','CaseController@index');
Route::get('/news','NewsController@index');
Route::get('/info/aboutUs','InfoController@aboutUs');
Route::get('/info/contactUs','InfoController@contactUs');