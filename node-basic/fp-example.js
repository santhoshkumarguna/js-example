function result(a){
    if(a){
        console.log(a)
        return result(a-5)
    }else{
        console.log("empty")
        return 'empty'
    }
}
result(20)
