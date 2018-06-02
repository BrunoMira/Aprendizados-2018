
@extends('principal')
    
    @section("conteudo")
     <h1>Listagem de produtos</h1>

        <table class="table">

        @foreach($produtos as $p):

            <tr class="{{ $p->quantidade <= 1 ? 'danger' : ''}}">
                <td> {{ $p->nome }}</td>
                <td> {{ $p->valor }}</td>
                <td> {{ $p->descricao }}</td>
                <td> {{ $p->quantidade }}</td>
                <td><a href="/produto/detalhes/{{ $p->id }}">Descrição</a></td>
            </tr>
        @endforeach
        </table>

        <div class="row">
            <div class="col-xs"><a href="/produtos/novo" class="btn btn-success">Adicionar</a></div>
        </div>
        
        @if( old('nome'))
            <div class="alert alert-success">produto {{ old('nome') }} adicionado com sucesso!</div>
        @endif
    @stop