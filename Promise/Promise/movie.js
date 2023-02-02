let goToMovie = (success,failure)=>{

    let amount = 400;
    if(amount > 500){
        success("Go to Movie with POPCORN")
    }else{
        failure("Take Sambar Rice! @ PG")
    }
}
goToMovie((msg)=>{
    console.log(msg)
},(err)=>{
    console.log(err)
})