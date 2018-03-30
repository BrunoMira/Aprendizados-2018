
let tree;
const limit = 30;

function execute(){
    tree = new Tree();

   for( let count = 0; count <= limit ; count++)
        tree.addNode( randomNumber() );

    treet = new TreeModel();
    root = treet.parse(tree)
    tree.traverse();
    tree.search(3);

}


function randomNumber(){
    return Math.floor(Math.random()*100);
}



execute();
