function esPar(numero){
    if (numero===0){
        return("¡Con el 0 no vale!")
    }
    else if(numero%2==0){
        return("¡Es par!")
    }
    else{
        return('No es par...')
    }
}
console.log(esPar());