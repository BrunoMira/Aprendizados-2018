@extends("principal")

@section("conteudo")

    <form action="/produtos/adiciona" method="post">
        <div class="form-group">

            <input type="hidden" name="_token" value=" {{ csrf_token() }}">

            <label for="nome">nome</label>
            <input class="form-control" type="text" name="nome" id="nome">
            
            <label for="valor">valor</label>
            <input class="form-control" type="number" name="valor" id="valor">
            
            <label for="quantidade">quantidade</label>
            <input class="form-control" type="text" name="quantidade" id="quantidade">
            
            <label for="descricao">descricao</label>
            <input class="form-control" type="text" name="descricao" id="descricao">
        </div>
        <input type="submit" value="Cadastar" class="btn btn-block btn-primary">
    </form>

@stop