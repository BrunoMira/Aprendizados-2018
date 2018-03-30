
function Node(val) {
    this.id = val;
    this.left = null;
    this.right = null;


}


Node.prototype.isNodeLeftNull = function () {
    return this.left == null;
}

Node.prototype.isNodeRightNull = function () {
    return this.right == null;
}

Node.prototype.visit = function(){
    
    if( !this.isNodeLeftNull() )
        this.left.visit();

    console.log(this.value);

    if( !this.isNodeRightNull() )
        this.right.visit();
}

Node.prototype.addNode = function (n) {

    if (n.value < this.value) {

        if (this.isNodeLeftNull())
            this.left = n;
        else
            this.left.addNode(n);

    } else if (n.value > this.value) {

        if (this.isNodeRightNull())
            this.right = n;
        else
            this.right.addNode(n);

    }

}

Node.prototype.search = function(val){
    

    if( val == this.value){
       return this;
    }else if ( !this.isNodeLeftNull() && val <= this.left.value  )
        return this.left.search(val)

    else if ( !this.isNodeRightNull() && val > this.right.value ) 
        return this.right.search(val)

}   
