
}
function buildTriangle(num){
      var trinagle = "";
    for(var i= 1 ; i <=num ; i++){
       trinagle += makeLine(i);
    }
    return trinagle;
}
console.log(buildTriangle(5));
