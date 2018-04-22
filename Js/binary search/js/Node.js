
function Node(val) {
    this.id = val;
    this.left = null;
    this.right = null;
    this.level = 0;
    this.x = 0;
    this.y = 0;
}


Node.prototype.isNodeLeftNull = function () {
    return this.left === null;
}

Node.prototype.isNodeRightNull = function () {
    return this.right === null;
}

Node.prototype.visit = function(){
    
    if( !this.isNodeLeftNull() )
        this.left.visit();

    console.log(this.id);

    if( !this.isNodeRightNull() )
        this.right.visit();
}

Node.prototype.addNode = function (n, level = 1 , width = 0  , height = 0) {
   let ajuste = 80 * level;
   let largura = 300;
    height += 80
    if (n.id < this.id) {
        width -= largura - ajuste;
        if (this.isNodeLeftNull()){
            this.left = n;
            this.left.level = level;
            this.left.x = width;
            this.left.y = height;
        }
        else{
            
            
            this.left.addNode(n, ++level , width , height);
        }

    } else if (n.id > this.id) {
        width += largura - ajuste;
        if (this.isNodeRightNull()){
            this.right = n;
            this.right.level = level;
            this.right.x = width;
            this.right.y = height;
        }
        else{
            
            this.right.addNode(n, ++level , width , height);
        }

    }

}

Node.prototype.search = function(val){
    

    if( val == this.id){
       return this;
    }else if ( !this.isNodeLeftNull() && val <= this.left.id  )
        return this.left.search(val)

    else if ( !this.isNodeRightNull() && val > this.right.id ) 
        return this.right.search(val)

}   

function calcHipotenusa(cateto , cateto2){
    return  Math.sqrt( Math.hypot(cateto , cateto2) );
}

Node.prototype.draw = function(cb){

    if (!this.isNodeLeftNull())
        this.left.draw(cb);

    cb(this);

    if (!this.isNodeRightNull())
        this.right.draw(cb);
}
