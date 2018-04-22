
let tree;
const limit = 5;

const canvas = document.querySelector("#canvas");

canvas.width = 1000;
canvas.height = 600;

canvas.style.backgroundColor = "#eee";

const ctx = canvas.getContext("2d");

function execute(){


    tree = new Tree(canvas.width / 2 , 30);

   for( let count = 0; count <= limit ; count++)
        tree.addNode( randomNumber() );

    treet = new TreeModel();
    root = treet.parse(tree)
    tree.traverse();



    //tree.search(3);

}

function randomNumber(){
    return Math.floor(Math.random() * 100);
}

execute();

function draw(node){
    
    ctx.beginPath();
    ctx.strokeStyle = "#000";
    ctx.arc(node.x, node.y , 20 , 0 , 2 * Math.PI );
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillText( node.id + "" , node.x - 5, node.y + 5);

    ctx.moveTo(node.x + 10 , node.y + 10);
    if (!node.isNodeLeftNull()){
        ctx.lineTo(node.left.x , node.left.y);
        ctx.strokeStyle = "#000";
        ctx.stroke();
    }
        
    ctx.moveTo(node.x + 10, node.y + 10);
        if (!node.isNodeRightNull()){
            ctx.lineTo(node.right.x, node.right.y);
            ctx.strokeStyle = "#000";
            ctx.stroke();
            
        }
    ctx.closePath();
}

//draw the circus


    if (!tree.isRootNull()){
        tree.root.draw(draw);
    }
    else
        console.log(errors.emptyRoot);

