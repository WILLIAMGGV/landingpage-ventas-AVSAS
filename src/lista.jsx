import React, { useState, useEffect } from 'react'
import logo from "./img/logo.png"

const Lista = () => {

    const [lista, setLista] = useState([])
    const [clave, setClave] = useState("")
    const [salir, setSalir] = useState(false)



   const obtenerlista = () => {

   fetch(`${process.env.REACT_APP_API_URL}/obtenerlista`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
})
.then((response) => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then((result) => {
    if (result) {
        setLista(result);
    } else {
        console.log('ERROR DE CONEXION');
    }
})
.catch((error) => {
    console.log(error);
});

   }




    useEffect(() => {
        if(clave==""){
            setSalir(true);
        }
    }, [clave]);

    const verificarclave = () => {
      
        var clave = document.getElementById("password2").value;

        if(clave =="avca2025"){
            setSalir(false);
            obtenerlista();
        }
        else{
            alert("CLAVE INCORRECTA INTENTE DE NUEVO")
        }

    }   

  return (
    <>
    <div>
      <div class="container mx-auto">
        <img src={logo} width="200px" alt="" />
        <h1 class="text-2xl font-bold mb-4">Lista de Registros</h1>
        <table class="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
            <thead>
                <tr class="bg-gray-200 text-gray-700">
                    <th class="py-2 px-4 border-b">Nombre</th>
                    <th class="py-2 px-4 border-b">Apellido</th>
                    <th class="py-2 px-4 border-b">Teléfono</th>
                    <th class="py-2 px-4 border-b">Email</th>
                </tr>
            </thead>
            <tbody>
                {lista.map((val, key) => {
                return (
                <tr class="hover:bg-gray-100" align="center">
                    <td class="py-2 px-4 border-b">{val.nombre}</td>
                    <td class="py-2 px-4 border-b">{val.apellido}</td>
                    <td class="py-2 px-4 border-b">{val.telefono}</td>
                    <td class="py-2 px-4 border-b">{val.email}</td>
                </tr>
                );
                })}
                
            </tbody>
        </table>
    </div>
    </div>


{salir ? (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-lg">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none bg-white">
            {/*body*/}
            <div className="h-20 bg-[#6633cc] rounded-t-lg place-content-center flex flex-grow text-white text-lg font-semibold font-mono">
            <svg class="w-[48px] h-[48px] text-white mt-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z" clip-rule="evenodd"/>
</svg>
<span className="mt-6 pl-2" style={{ fontFamily: "pbold", letterSpacing: "2px" }} >Seguridad de Datos</span>
            </div>
            <div className="relative p-1 flex-auto">
              <div className="p-1 md:p-1 text-center">
                <div>
                <div class="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <label for="password2" class="block text-gray-700 text-sm font-bold mb-2">
            Escriba su contraseña
        </label>
        <input type="password" id="password2" name="password2" 
               class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
               placeholder="Contraseña" required />
    </div>
                </div>
              </div>
            </div>
            <div className="h-18 bg-[#6633cc] rounded-b-lg place-content-end flex flex-grow text-cyan-300 text-2xl font-semibold font-mono">
              <button
                type="button"
                onClick={() => {
                  verificarclave()
                }}
                data-modal-hide="popup-modal"
                class="m-2 text-gray-900 bg-[#2ae69a] hover:bg-[#00ff99]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
              >
                <svg class="w-[32px] h-[32px] text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/>
</svg>

                &nbsp;Entrar
              </button>
           
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  ) : null}
</>
    
  )
}

export default Lista
