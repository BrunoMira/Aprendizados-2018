Tentativa de automatizar algumas tarefas com gulp, mas não ficou muito legal.

A ideia aqui é ter a  node_modules na raiz de um servidor local, e em cada sub-pasta ter um arquivo gulp.js.

A jogada é legal para não precisar ficar baixando as dependencias toda vez. porem você cria um monte de arquivos gulp.js, se você decidir mudar algo, tem que sair
atrás de todos os arquivos.

Eu vi exemplos legais em que o cara usa o gulp.js só pra chamar outras arquivos que de fato tem a lógica da automação, isso mata o problema de várias arquivos gulp.js.