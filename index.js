function receivesAFunction(spy){// let  spy = function print (){}
    return spy();
}

function returnsANamedFunction(){
    return(function print(){
        console.log (print);
    })
}

function returnsAnAnonymousFunction(){
    return (() =>{
        console.log("Hello"); 
    });
}
