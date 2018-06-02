
    @extends('principal')

    @section('conteudo')
    <h1>Detalhes do produto {{$produto->id}};</h1>

    <div class="container">
        <table class="table">
            <tr>
                <td> {{$produto->nome}} </td>
                <td> {{$produto->valor}} </td>
                <td> {{$produto->descricao}} </td>
                <td> {{$produto->quantidade}} </td>
            </tr>
        </table>
    </div>
    @stop