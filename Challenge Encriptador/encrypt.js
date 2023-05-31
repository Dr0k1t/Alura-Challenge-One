function validateText(text){ //Función para validar si el texto tiene caracteres especiales (expluyendo espacios)
    return (RegExp("[A-Z]").test(text.replace(/\s/g, '')) || RegExp("[^a-z]").test(text.replace(/\s/g, '')))
} //retorna un booleano que en caso de contener mayúsculas o caracteres especiales retornará true y viceversa

function encrypt(){ //Función de encriptación
    let text = document.getElementById('text-input').value //Obtenemos la string dentro del text area
    if (validateText(text) === false) { //en una misma línea encriptamos y damos valor al text area output
        document.querySelector('#text-output').value = text.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat")
    } else {
        return alert('El texto no debe contener mayúsculas ni caracteres especiales.') //si la función validate devuelve true entonces nos salta una alerta
    }
}

function decrypt(){ //Homólogo a la función anterior pero para desencriptar
    let text = document.getElementById('text-input').value
    if (validateText(text) === false) {
        document.querySelector('#text-output').value = text.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    } else {
        return alert('El texto no debe contener mayúsculas ni caracteres especiales.')
    }
}