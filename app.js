let inputBuscar = document.getElementById(`bucarNombre`);
let contenido = document.getElementsByTagName(`td`);

// datos imputados

let imputados = `https://jsonplaceholder.typicode.com/users`;

fetch(imputados)
  .then((response) => response.json())
  .then((json) => mostrarDatos(json))
  .catch((error) => console.log(error));

let mostrarDatos = (data) => {
  console.log(data);
  let body = ``;
  for (let i = 0; i < data.length; i++) {
    body += `<tr><td>${data[i].name}</td></tr>`;
  }
  document.querySelector(`.datosImputados`).innerHTML = body;
};

//busqueda
inputBuscar.addEventListener(`keyup`, (event) => {
  let texto = event.target.value;
  //console.log(texto);
  const er = new RegExp(texto, "i");
  for (let i = 0; i < contenido.length; i++) {
    let valor = contenido[i];
    // console.log(valor);
    if (er.test(valor.innerText)) {
      valor.classList.remove("ocultar");
    } else {
      console.log(valor);
      valor.classList.add("ocultar");
    }
  }
});
