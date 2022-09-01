function receivesAFunction(spy){
    return spy();
}

function returnsANamedFunction(){
    return(function print(){
    })
}

function returnsAnAnonymousFunction(){
    return (() =>{
        console.log("Hello"); 
    });
}
