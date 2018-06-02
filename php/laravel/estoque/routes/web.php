<?php

Route::get('/',function(){
    return "<h1>Listagem de produtos</h1>";
});


Route::get("/produtos", 'ProdutoController@getLista');
Route::get("/produto/detalhes/{id}", 'ProdutoController@mostra')->where("id", "[0-9]+");


Route::get("/produtos/novo", 'ProdutoController@novo');
Route::post("/produtos/adiciona", 'ProdutoController@adiciona');
