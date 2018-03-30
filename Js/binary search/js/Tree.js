
var errors = {
    emptyRoot : "Não existem um elemento inicial na arvore"
}

function Tree() {
    this.root = null;
}

Tree.prototype.addNode = function (val) {
    var node = new Node(val);

    if ( this.isRootNull() ) {

        this.root = node;

    } else {
        this.root.addNode(node);
    }
}


Tree.prototype.traverse = function () {
    if( !this.isRootNull() )
        this.root.visit();
    else
        console.log( errors.emptyRoot );
}

Tree.prototype.search = function(val){
    if ( !this.isRootNull() )
       node =  this.root.search(val);
    else{
        console.log( errors.emptyRoot );
        return ;
    }

    if( node ){
        console.log( "Encontrei o node: ");
        console.log(node);
    }
    else
        console.log("Não encontrei o node");

    
}
Tree.prototype.isRootNull = function(){
    return this.root == null;
}