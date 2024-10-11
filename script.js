
//podrías hacer algo asi
 // Función para eliminar una fila
    function eliminarElemento(e) {
      // Obtener la fila que contiene el botón
      var elemento = boton.parentNode.parentNode;
      
      // Eliminar la fila de la tabla
      elemento.parentNode.removeChild(elemento);
    }
// y esto para agregar el producto
 // Función para agregar productos a la tabla
    function agregarProducto() {
      // Obtener el producto seleccionado
      var e = document.getElementById("product").value;
      
      // Obtener el cuerpo de la tabla (tbody)
      var lista = document.getElementById("product").getElementsByTagName('tbody')[0];
      
      // Crear una nueva fila (tr)
      var nuevaFila = tabla.insertRow("product");
      
      // Crear una celda para el producto
      var celdaProducto = nuevaFila.insertCell(0);
      celdaProducto.textContent = productoSeleccionado;
      
      // Crear una celda para el botón de eliminar
      var celdaAccion = nuevaFila.insertCell(1);
      var botonEliminar = document.createElement("agregar-carrito btn-2");
      botonEliminar.textContent = "Eliminar";
      
      // Asignar la función de eliminar fila al botón
      botonEliminar.onclick = function() {
        eliminarFila(this);
      };
      
      // Agregar el botón a la celda de acción
      celdaAccion.appendChild(botonEliminar);
    }