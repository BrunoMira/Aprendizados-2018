<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Request;


class ProdutoController extends Controller{

    public function getLista(){
       
        $produtos = DB::select('select * from produtos');   
        return view("listagem")->with("produtos", $produtos);
    }

    public function mostra($id){
        $produto = DB::select('select * from produtos where id = ?', [$id]);

        if(empty($produto))
            return "Produto não encontrado";

        return view("detalhes")->with("produto", $produto[0]);
    }

    public function novo(){
        return view("formulario");
    }

    public function adiciona(){

        $nome = Request::input('nome');
        $quantidade = Request::input('quantidade');
        $valor = Request::input('valor');
        $descricao = Request::input('descricao');

        DB::insert('insert into produtos(nome, quantidade, valor, descricao) values (? , ? ,? ,?)' , array($nome, $quantidade, $valor, $descricao));

        return redirect("/produtos")->withInput();
    }
}