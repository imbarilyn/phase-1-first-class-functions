function receivesAFunction(spy){
    return spy();
}

function returnsANamedFunction(){
    return(function print(){
        console.log("Hello");
    });
}

function returnsAnAnonymousFunction(){
    return (() =>{
        console.log("Hello"); 
    });
}