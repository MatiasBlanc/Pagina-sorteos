// la raiz cuadrada
// numero = Math.sqrt(25);

// la raiz cubica
// numero = Math.cbrt(27);

// ve el numero mas grande
// numero = Math.max(271,2,5,2,6,234,23,7,4,6,2);

// ve el numero mas pequeno
// numero = Math.min(271,2,5,2,6,234,23,7,4,6,2,-90);

// muestra un numero aleatorio entre 0 y 1
  elegir = prompt("cuantas personas son en el sorteo");
  numero = Math.random()*elegir;
  numero = Math.floor(numero+1);

  if (elegir == 1) {
    alert("son muy pocas personas");
  }

  else {
  document.write("<p class=numero>" + numero + "<br> </p>");
  }

// mostrar numero Pi
// numeroPi = Math.PI;
