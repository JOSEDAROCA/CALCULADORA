import "./styles.css";

let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");
let rotulo3 = document.getElementById("rotulo3");
let resultado = document.getElementById("resultado");

rotulo1.innerHTML = "Ingrese una operacion";
rotulo2.innerHTML = "Ingrese un numero";
rotulo3.innerHTML = "Ingrese otro numero";

//Boton
let btnEnv = document.getElementById("btnEnv");

//Escuchando click del Boton
btnEnv.addEventListener("click", () => {
  //Capturando los valores de los datos
  let operacion: string = document.getElementById("operacion").value;
  let dato1: number = Number(document.getElementById("dato1").value);
  let dato2: number = Number(document.getElementById("dato2").value);

  //Realiza operacion segun la operacion ingresada con los numeros ingresados
  switch (operacion) {
    case "suma":
      let resultadoCalculo = dato1 + dato2;
      resultado.innerHTML = "El resultado es " + resultadoCalculo;
      console.log(resultadoCalculo);
      break;

    case "resta":
      resultadoCalculo = dato1 - dato2;
      resultado.innerHTML = "El resultado es " + resultadoCalculo;
      console.log(resultadoCalculo);
      break;

    case "multiplicacion":
      resultadoCalculo = dato1 * dato2;
      resultado.innerHTML = "El resultado es " + resultadoCalculo;
      console.log(resultadoCalculo);
      break;

    case "division":
      resultadoCalculo = dato1 / dato2;
      resultado.innerHTML = "El resultado es " + resultadoCalculo;
      console.log(resultadoCalculo);
      break;

    default:
      console.log("Ingrese datos para operar");

      break;
  }
});
