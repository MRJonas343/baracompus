
function showpassword() {
    var passwordInput = document.getElementById("password");
    var togglePasswordButton = document.getElementById("mostrar-contrasena");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePasswordButton.innerHTML = '<i class="bi bi-eye-slash"></i>'; 
    } else {
        passwordInput.type = "password";
        togglePasswordButton.innerHTML = '<i class="bi bi-eye"></i>'; 
    }
}

//Carrito de compras 2.0
//Contenedor del carrito de compras
// const carritoContenedor = document.getElementById("carritoContainer");

// // Tod0s los articulos tiene una clase, recuperemosla
// const articulosDisponibles = document.querySelectorAll(".ParaCarrito");

// //Event listener
// articulosDisponibles.forEach(articulosDisponibles => {
//   articulosDisponibles.addEventListener("click", function(e) {
//     //Obtener el producto seleccionado
//     articuloSeleccionado = (e.target.parentNode.parentNode.cloneNode(true));
//     let imagenProducto = articuloSeleccionado.getElementsByTagName('img');
//     //Obtener el texto de descripcion y el boton
//     let descripcionProducto = articuloSeleccionado.getElementsByClassName("descripcion");
    
//     //Recuperar img
//     console.log(imagenProducto)
//     //Si hay tento, sacalo, quiero el puro articulo
//     // Iterar sobre la colección y eliminar cada elemento
//     for (let i = 0; i < descripcionProducto.length; i++) {
//         console.log(descripcionProducto[i])
//         descripcionProducto[i].remove();
//       }
//     // //Quitale la clase
//      articuloSeleccionado.classList.remove("contendorProducto");

//     // //Ponle esta
//      articuloSeleccionado.classList.add("articuloEnCarrito");
//     carritoContenedor.appendChild(articuloSeleccionado);
//   });
// });


//Obtener todos los elementos
const articulosDisponibles = document.querySelectorAll('.article');

//Event listener
articulosDisponibles.forEach(articulosDisponibles => {
  articulosDisponibles.addEventListener("click", function(e) {
    //Obtener el producto seleccionado
    articuloSeleccionado = (e.target.parentNode.parentNode.cloneNode(true))
    nombreArticulo = articuloSeleccionado.getElementsByTagName('h5')[0].innerHTML
    currentPrice = articuloSeleccionado.getElementsByClassName("currentPrice")[0].innerHTML
    realPrice = articuloSeleccionado.getElementsByClassName("realPrice")[0].innerHTML
    imgArticulo = articuloSeleccionado.getElementsByTagName('img')

    // let imagenProducto = articuloSeleccionado.getElementsByTagName('img');
    // //Obtener el texto de descripcion y el boton
    // let descripcionProducto = articuloSeleccionado.getElementsByClassName("descripcion");
    
    // //Recuperar img
    // console.log(imagenProducto)
    // //Si hay tento, sacalo, quiero el puro articulo
    // // Iterar sobre la colección y eliminar cada elemento
    // for (let i = 0; i < descripcionProducto.length; i++) {
    //     console.log(descripcionProducto[i])
    //     descripcionProducto[i].remove();
    //   }
    // // //Quitale la clase
    //  articuloSeleccionado.classList.remove("contendorProducto");

    // // //Ponle esta
    //  articuloSeleccionado.classList.add("articuloEnCarrito");
    // carritoContenedor.appendChild(articuloSeleccionado);
  });
});

  