
ganancia = ()=>{
    entrada = document.getElementById("p_entrada_g").value
    salida = document.getElementById("p_salida_g").value

    e = parseInt(entrada, 10);
    s = parseInt(salida,10)

    result = 10 * Math.log10(s/e)
    console.log(result);

    document.getElementById("ganancia_result").innerHTML="= "+result.toString();
}


perdida = ()=>{
    entrada = document.getElementById("p_entrada_p").value
    salida = document.getElementById("p_salida_p").value

    e = parseInt(entrada, 10);
    s = parseInt(salida,10)

    result = 10 * Math.log10(e/s)
    console.log(result);

    document.getElementById("perdida_result").innerHTML="= "+result.toString();
}