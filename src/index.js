  const userNumber = prompt("cuantas personas son en el sorteo");
  let number = Math.random()*userNumber;
  let finalNumber = Math.floor(++number);

  if (userNumber == 1 ||userNumber == 0) {
    alert("son muy pocas personas");
  } else {
    document.write(`<p class="number">${finalNumber}</p>`);
  }