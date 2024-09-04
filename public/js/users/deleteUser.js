//-------------------ELIMINAR USUARIO-----------------//
const deleteUser = async (userId) => {
    if (userId) {
        console.log(userId);
        //   if (confirm("¿Está seguro de eliminar éste usuario? Operación irreversible")) 
        {
            try {
                let result = await fetch(`/api/users/deleteUser/${userId}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                if (!result.ok) {
                    throw new Error("Error al eliminar usuario");
                } else {
                    alert("USUARIO ELIMINADO CORRECTAMENTE");

                    setTimeout(() => {
                        window.location.reload();
                    }, 1000);
                }
            } catch (error) {
                console.error(error);
                alert("Error al intentar eliminar el usuario");
            }
        }
    } else {
        alert("No hay usuario seleccionado para eliminar");
    }
};