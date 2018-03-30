Tutorial da página https://css-tricks.com/the-blur-up-technique-for-loading-background-images/

A ideia é fazer um tipo de lazy load. em vez de carregar uma imagem muito grande, você cria uma versão minúscula (40x40) e cobre o background com ela, mas só isso deixa a imagem com pixels estorados, para ficar mais agradável usamos a propriedade filter do css para colocar um blur na imagem. Carregamos a imagem grande via JS e quando finalizar trocamos a imagem borrada pela original.

Visualmente fica bem legal, mas tem 2 problemas.

1º o filter ainda não é suportado pelos principais navegadores.

2º Mesmo tendo um efeito legal, você acaba fazendo o download de uma imagem a mais (mesmo ela sendo minúscula, é uma requisição a mais)

extra: se por alguma razão o JS não executar, você vai ficar com a imagem borrada 