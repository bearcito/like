let likeCounts = [0, 0, 0]; // Un arreglo para almacenar los "Me gusta" de cada publicación

function incrementLike(index) {
    // Incrementar el contador de "Me gusta" correspondiente al índice dado
    likeCounts[index]++;

    // Actualizar el texto del contador de "Me gusta" correspondiente a la publicacion
    const likeCountElements = document.querySelectorAll('.like-count');
    likeCountElements[index].textContent = likeCounts[index] + (likeCounts[index] === 1 ? ' like' : ' likes');
   
    // Deshabilitar el boton despues de hacer clic en él
    const likeButtons = document.querySelectorAll('.like-button');
    likeButtons[index].disabled = true;

    // Quitar el atributo 'onclick' para evitar que la función se llame nuevamente
    likeButtons[index].removeAttribute('onclick');
}
