//--------------REGISTRO USUARIO ------------------------//
const registerUser = async (event) => {
    event.preventDefault();

    //obtener los valores del formulario
    const name = document.getElementById("name").value;
    const lastName = document.getElementById("lastName").value;
    const address = document.getElementById("address").value;
    const mail = document.getElementById("mail").value;
    const password = document.getElementById("password").value;

    //crear userData, el objeto cuyos valores se desestructuran en createUserService

    const userData = { name, lastName, address, mail, password };

    try {
        //Solicitud POST al backend
        const response = await fetch("/api/users/createUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData) //Convertir objeto a JSON
        });
        //MANEJAR LA RESPUESTA DEL BACKEND
        const result = await response.json();

        //if...else: Maneja respuestas válidas del servidor que pueden indicar éxito o error según el código de estado.
        if (response.ok) {
            console.log("Usuario creado con éxito");
            setTimeout(() => {
                window.location.href = "/";
            }, 1000);
        } else {
            console.error("error al crear usuario", error);
        }
    } catch (error) {
        console.error("Error al crear usuario", error);
        alert("Error al crear usuario");
    }
}
//------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", async () => {
    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", registerUser);
    }
});