//funcion de flecha que se llama callback
// el this hace referencia a Form, hace referencia a algo

// TIPOS DE SERIALIZACION, uno sale los parametros en la url
// y en el segundo lo acomoda en un arreglo de objetos
// el prevent default se usa para que cuando se de click al submit, este evita que pase eso
//ignora lo del action, y ya no te manda a la pagina que esta en el action

$("form").on("submit", (event)=> {
    event.preventDefault();
    var ser1 = $("form").serialize();
    var ser2 = $("form").serializeArray();
    console.log(ser1);
    console.log(ser2);  
});

$("#checkAcept").click(()=> {
    if($("#checkAcept").is(":checked")){
        console.log("Aceptado");
    }else {
        console.log("No Aceptado");
    }
});

$("#checkName").click(() => {
    if($("#checkName").is(" ")){
        console.log("Nombre Aceptado");
    }else {
        console.log("Nombre no aceptado");
    }
});

// explicacion breve de un arreglo de objetos
// var objeto = {
//     1 : {
//         1.1 : "uno punto uno",
//         1.2 : "uno punto dos",
//     }
// }