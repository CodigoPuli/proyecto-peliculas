export const GuardarEnStorage = (clave, elemento) => {

    // Conseguir los elementos que ya tenemos en el LocalStorage
    let elementos = JSON.parse(localStorage.getItem(clave))
    
    // Comprobar si es un array 
    if(Array.isArray(elementos)){
        // Añadir dentro del array un elemento nuevo
        elementos.push(elemento)
    }else{ 
        // Crear un array con la nueva elemento
        elementos = [elemento]
    }


    // Guardar en el Localstorage
    localStorage.setItem(clave, JSON.stringify(elementos))

    // Devolver objeto guardado
    return elemento

  }