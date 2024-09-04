//-----------------UPDATE-----------------------------//
const updateForm = async (event) => {
    event.preventDefault();
    const userId = JSON.parse(localStorage.getItem("userIdToEdit"));
    if (!userId) {
        console.error("No se encontró el ID del usuario en localStorage");
        return;
    }

    const name = document.getElementById("name").value;
    const lastName = document.getElementById("lastName").value;
    const address = document.getElementById("address").value;
    const mail = document.getElementById("mail").value;
    const password = document.getElementById("password").value;

    const userToEdit = { name, lastName, address, mail, password };

    try {
        const response = await fetch(`/api/users/updateUser/${userId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userToEdit),
        });

        if (response.ok) {
            alert("Usuario actualizado con éxito");
            setTimeout(() => {
                window.location.href = "./tables.html";
            }, 1000);
            await usersTable(); // Recargar la tabla después de actualizar
        } else {
            throw new Error("Error al actualizar usuario");
        }

    } catch (error) {
        console.error("Error al actualizar usuario", error);
    }
}
//-------------------- FIN UPDATE ---------------------------//
document.addEventListener("DOMContentLoaded", async () => {
    const userId = JSON.parse(localStorage.getItem("userIdToEdit"));
    if (userId) {
        try {
            const response = await fetch(`/api/users/${userId}`);
            if (response.ok) {
                const data = await response.json();
                const user = data.result[0];

                /*                //VERIFICAR QUE RECIBE LOS DATOS
                                const lastNameInput = document.getElementById("lastName");
                                console.log(lastNameInput); // Debería mostrar el elemento de entrada o null
                
                                if (!lastNameInput) {
                                    console.error("El elemento con ID 'name' no se encontró en el DOM");
                                    return;
                                }
                */
                //--------------FIN VERIFICACION QUE RECIBE LOS DATOS-----------

                // Rellenar el formulario con los datos del usuario
                document.getElementById("name").value = user.name;
                document.getElementById("lastName").value = user.lastName;
                document.getElementById("address").value = user.address;
                document.getElementById("mail").value = user.mail;
                document.getElementById("password").value = user.password;
            } else {
                console.error("Error al obtener los datos del usuario");
            }
        } catch (error) {
            console.error("Error en la solicitud de usuario: ", error);
        }
    } else {
        console.error("No se encontró el ID del usuario en localStorage");
    }

    const updateFormElement = document.getElementById("UpdateForm");
    if (updateFormElement) {
        updateFormElement.addEventListener("submit", updateForm);
    } else {
        console.error("El formulario de actualización no se encontró en el DOM");
    }
});