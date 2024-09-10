// DESARROLLO
let nombreUsuario;
const onza = 30; //en ml

// Aca claramente haria un array de objetos ingrediente pero me apego a las circunstancias
let nomIngrediente1, nomIngrediente2, nomIngrediente3;
let cantIngr1, cantIngr2, cantIngr3;

function ingresarUsuario(){
    nombreUsuario = prompt("Por favor, ingrese su nombre: ");
    return validarTexto(nombreUsuario,ingresarUsuario);
}

function ingresarTrago(){
    // Funcion que llama 3 veces a ingresar ingrediente e ingresar cantidad
    alert("Crearemos un trago de 3 ingredientes.");
    
    const cantIngredientes = 3;
    let nom, cant;

    for(let i=0;i<cantIngredientes;i++){
        nom = ingresarIngrediente((i+1));
        cant = parseInt(ingresarOnzas());

        switch(i){
            case 0:
                nomIngrediente1 = nom;
                cantIngr1 = cant;
            case 1:
                nomIngrediente2 = nom;
                cantIngr2 = cant;
            case 2:
                nomIngrediente3 = nom;
                cantIngr3 = cant;
        }
    }

}

function ingresarIngrediente(index){
    // le pide al usuario el nombre del ingrediente y lo valida
    let nombreIngrediente = prompt("Ingrese el nombre del Ingrediente " + index);
    return validarTexto(nombreIngrediente,ingresarIngrediente,index);
}

function ingresarOnzas(){
    // le pide al usuario la cantidad de onzas y lo valida
    let cantOnzas = prompt("Ingrese la cant de onzas a poner\n(Recuerde que: 1oz = 30ml)");
    return validarNumero(cantOnzas, ingresarOnzas);
}

function validarTexto(value, callback, index){
    // analiza que el campo no haya sido llenado con numeros o que este vacio
    if( (!(isNaN(value))) || (value==null) || (value=="") ){
        alert("Por favor, ingrese texto valido");
        return callback(index);
    }else{
        return(value);
    }
}

function validarNumero(value, callback){
    // analiza que el campo no haya sido llenado con texto o que este vacio
    if( (isNaN(value)) || (value==null) || (value=="") ){
        alert("Por favor, ingrese un numero");
        return callback();
    }else{
        return(value);
    }
}

const sumaOz = function (ingr1,ingr2,ingr3) { return  ingr1 + ingr2 + ingr3 }; //suma las onzas

function tamanioTrago(){
    let enOnza = sumaOz(cantIngr1,cantIngr2,cantIngr3);
    let enMl = enOnza * onza;
    let cristaleria;

    if(enMl<60){
        cristaleria = "shot";
    }
    else if((enMl>=60) && (enMl<200)){
        cristaleria = "copa martini";
    }
    else if((enMl>=200) && (enMl<250)){
        cristaleria = "vaso old fasioned";
    }
    else if((enMl>=250) && (enMl<300)){
        cristaleria = "vaso highball";
    }
    else if((enMl>=300) && (enMl<450)){
        cristaleria = "vaso copon"; 
    }
    else if(enMl>=450){
        cristaleria = "balde";
    }

    return ("\n\nEste trago tiene: " + enOnza + "oz = " + enMl + "ml\n\nTe conviene ponerlo en: " + cristaleria);
}


function imprimirInfo(){
    alert("Terminamos, " + nombreUsuario + "!\n\nIngrediente 1: " + nomIngrediente1 + " - " + cantIngr1 + "oz\nIngrediente 2: " + nomIngrediente2 + " - " + cantIngr2 + "oz\nIngrediente 3: " + nomIngrediente3 + " - " + cantIngr3 + "oz" + tamanioTrago() );
}



// EJECUCION
ingresarUsuario();
ingresarTrago();
imprimirInfo();