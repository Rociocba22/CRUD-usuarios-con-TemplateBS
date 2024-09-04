
//--------------MOSTRAR TODOS LOS USUARIOS------------------------//
const mostrarUsuarios = async () => {
    try {
        let response = await fetch("api/users/showUsers");
        if (!response.ok) {
            throw new Error("Error al obtener los usuarios");
        }
        const users = await response.json();

        const containerUsuarios = document.getElementById("containerUsuarios");
        containerUsuarios.innerHTML = "";


        users.forEach((user) => {
            const row = document.createElement("tr");

            row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.lastName}</td>
            <td>${user.address}</td>
            <td>${user.mail}</td>
            <td>${user.password}</td>  
            <td><button class="btn btn-success btn-sm" id="btnUpdate" onclick='redirectToEditForm(${user.id})'>Actualizar</button></td>       
            <td> <button class="btn btn-danger btn-sm" onclick='deleteUser(${user.id})'>Eliminar</button></td>
        `

            containerUsuarios.appendChild(row);
        });
    } catch (error) {
        console.error("Error al cargar los usuarios: ", error);
    }
}
//-------------- FIN MOSTRAR TODOS LOS USUARIOS------------------------//


//--------------SELECCIONAR USUARIO POR ID------------------------//
const getUserById = async (userId) => {
    try {
        const response = await fetch(`/api/users/${userId}`);
        if (!response.ok) {
            throw new Error("Error al obtener los datos del usuario");
        }
        const data = await response.json();
        return data.result[0];

    } catch (error) {
        console.error("Error al obtener los datos del usuario", error);
    }
    document.getElementById("userId").value = userId;
    showDataUser(userId);
};
//-------------- FIN SELECCIONAR USUARIO POR ID------------------------//

//-------------- REDIRECCIÓN A EDICIÓN DE USUARIO  ------------------------//
const redirectToEditForm = (userId) => {
    localStorage.setItem("userIdToEdit", userId);
    console.log("ID guardado en LocalStorage", userId);
    window.open("./updateUser.html", "_blank");
}

//------------------ FIN REDIRECCIÓN-----------------------------//


document.addEventListener("DOMContentLoaded", async () => {

    const containerUsuarios = document.getElementById("containerUsuarios");
    if (containerUsuarios) {
        mostrarUsuarios();
    }
});
//------------------------------------------------------------------//
