/**
 * Linktree JavaScript - Maneja el contenido dinámico del perfil
 * Este script crea e inserta los elementos del nombre y la bio
 * en el contenedor definido en el HTML
 */

// Función para inicializar el contenido dinámico
function initializeContent() {
    // Datos del perfil
    const profileData = {
        name: "Mindy Frauke",
        bio: "Just trying my best"
    };

    // Obtenemos el contenedor donde insertaremos los elementos
    const profileInfoContainer = document.getElementById('profile-info-container');
    
    // Creamos el elemento de nombre (h1)
    const nameElement = document.createElement('h1');
    nameElement.textContent = profileData.name;
    
    // Creamos el elemento de bio (p)
    const bioElement = document.createElement('p');
    bioElement.textContent = profileData.bio;
    bioElement.className = 'bio';
    
    // Insertamos los elementos en el contenedor
    profileInfoContainer.appendChild(nameElement);
    profileInfoContainer.appendChild(bioElement);
    
    // Mensaje de confirmación en la consola
    console.log("Perfil inicializado correctamente");
}

// Ejecutamos la función cuando el documento está completamente cargado
document.addEventListener('DOMContentLoaded', initializeContent);