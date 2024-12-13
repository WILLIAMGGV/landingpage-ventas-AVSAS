import React, {useState} from 'react';
import "./App.css";
import titulo1 from "./img/titulo1.png";
import titulo2 from "./img/titulo2.png";
import logo from "./img/logo.png";
import texto from "./img/texto.png";
import franja2 from "./img/franja2.png";
import palabra1 from "./img/palabra1.png"
import palabra2 from "./img/palabra2.png"
import hombre from "./img/hombre.png"
import registrate from "./img/registrate.png"
import pie from "./img/pie.png"

function Home() {
  const [salir, setSalir] = useState(false);


  const [nombrew, setNombrew] = useState("")
  const [apellidow, setApellidow] = useState("")
  const [telefonow, setTelefonow] = useState("")
  const [emailw, setEmailw] = useState("")
  
  const guardar = async (e) => {

    e.preventDefault()

    document.getElementById("buttonenviar").innerHTML = "Enviando..."
    document.getElementById("buttonenviar").disabled = true
 
    // Obtener los valores de los campos de entrada
    const data = {
      nombre: nombrew,
      apellido: apellidow,
      telefono: telefonow,
      email: emailw,
    };
  
    //console.log(data);
    //console.log(process.env.REACT_APP_API_URL);
  
    try {
      // Realizar la solicitud POST
      const response = await fetch(`${process.env.REACT_APP_API_URL}/enviarcorreo`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      // Verificar si la respuesta es exitosa
      if (!response.ok) {
        throw new Error('Network response was not ok: ' + response.statusText);
      }
  
      const result = await response.json();
      //console.log(result);
    
      setNombrew("")
      setApellidow("")
      setTelefonow("")
      setEmailw("")
      document.getElementById("nombre").value = ""
      document.getElementById("apellido").value = ""
      document.getElementById("telefono").value = ""
      document.getElementById("email").value = ""

      


      const enlace = document.createElement('a');
    enlace.href = '/matriz.pptx'; // Ruta al archivo en la carpeta public
    enlace.download = 'matriz.pptx'; // Nombre del archivo que se descargará
    document.body.appendChild(enlace); // Añadir el enlace al DOM
    enlace.click(); // Simular un clic en el enlace
    document.body.removeChild(enlace);
    
    document.getElementById("buttonenviar").innerHTML = "ENVIAR"
    document.getElementById("buttonenviar").disabled = false
    setSalir(true)
    
    
    } catch (error) {
      console.error('Error:', error);
      //document.getElementById("gracias").innerHTML = "Ocurrió un error. Por favor, intenta nuevamente. Detalle: " + error.message;
    }
  };

  const guardar2 = async (e) => {

    e.preventDefault();
    

    document.getElementById("botonenviar2").innerHTML = "Enviando..."
    document.getElementById("botonenviar2").disabled = true
 
    // Obtener los valores de los campos de entrada
    const data = {
      nombre: nombrew,
      apellido: apellidow,
      telefono: telefonow,
      email: emailw,
    };
  

    //console.log(data);
    //console.log(process.env.REACT_APP_API_URL);
  
    try {
      // Realizar la solicitud POST
      const response = await fetch(`${process.env.REACT_APP_API_URL}/enviarcorreo`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      // Verificar si la respuesta es exitosa
      if (!response.ok) {
        throw new Error('Network response was not ok: ' + response.statusText);
      }
  
      const result = await response.json();
      //console.log(result);
    
      setNombrew("")
      setApellidow("")
      setTelefonow("")
      setEmailw("")

      document.getElementById("nombremobil").value = ""
      document.getElementById("apellidomobil").value = ""
      document.getElementById("telefonomobil").value = ""
      document.getElementById("emailmobil").value = ""

   


      const enlace = document.createElement('a');
    enlace.href = '/matriz.pptx'; // Ruta al archivo en la carpeta public
    enlace.download = 'matriz.pptx'; // Nombre del archivo que se descargará
    document.body.appendChild(enlace); // Añadir el enlace al DOM
    enlace.click(); // Simular un clic en el enlace
    document.body.removeChild(enlace);
    
    document.getElementById("botonenviar2").innerHTML = "ENVIAR"
    document.getElementById("botonenviar2").disabled = false
    setSalir(true)
    
    
    } catch (error) {
      console.error('Error:', error);
      //document.getElementById("gracias").innerHTML = "Ocurrió un error. Por favor, intenta nuevamente. Detalle: " + error.message;
    }
  };
  return (
    <>
    <div>
    <div className="fondo1 flex flex-row place-content-center" >
      <img src={titulo1} className="sm:w-auto sm:h-full w-[100%] h-[90%]" alt="" />
      <br />
    </div>

    <div className="fondo2">

    <div className="flex flex-row place-content-center">
      
              <img src={palabra1} width="50%" alt="" className=" mt-4 sm:mt-8 mb-4 sm:mb-8"  />
            </div>

            <div className="flex flex-row place-content-center">
              <img src={palabra2} alt="" width="95%"  />
            </div>


       
    </div>

  
    <div className="fondo3">

<div className="flex flex-row place-content-center sm:mt-[350px]">
          <img src={hombre} alt=""  />
        </div>

        <div className="flex flex-row place-content-center">
          <img src={registrate} width="90%" alt=""  />
        </div>

        <form onSubmit={guardar}>
        <table className="hidden sm:block " width="80%" align="center">
        <tr>
          <td valign="top">
            <br />
            <br />
          <img src={logo}  />
          </td>
          <td valign="top">
          <div className="mt-4 ml-8 flex flex-row">
            <div
              className="p-4 bg-[#000033] w-[140px]  sm:w-[240px] text-center text-[22px] sm:text-[32px] text-[#00ff99] rounded-full"
              style={{
                fontFamily: "pextrabold",
                lineHeight: 1,
              }}
            >
              Nombre:
            </div>
            <div className="w-full pr-10 ">
              <input
                className="h-10 m-4 border-b-4 focus:outline-none focus:ring-0 sm:text-[34px] text-[18px] pl-4 border-gray-900 text-[#4741f2] rounded-sm  w-full"
                type="text"
                id="nombre"
                name="nombre"
                onChange={(e) => setNombrew(e.target.value)}
                defaultValue={nombrew}
                style={{
                  fontFamily: "pbold",
                  lineHeight: 1,
                  letterSpacing: "2px",
                }}
                required
              />
            </div>
          </div>
          <div className="mt-4 ml-8 flex flex-row">
            <div
              className="p-4 bg-[#000033] w-[140px]  sm:w-[240px] text-center text-[22px] sm:text-[32px] text-[#00ff99] rounded-full"
              style={{
                fontFamily: "pextrabold",
                lineHeight: 1,
              }}
            >
              Apellido:
            </div>
            <div className="w-full pr-10 ">
              <input
                className="h-10 m-4 border-b-4 focus:outline-none focus:ring-0 sm:text-[34px] text-[18px] pl-4 border-gray-900 text-[#4741f2] rounded-sm  w-full"
                type="text"
                id="apellido"
                name="apellido"
                onChange={(e) => setApellidow(e.target.value)}
                defaultValue={apellidow}
                style={{
                  fontFamily: "pbold",
                  lineHeight: 1,
                  letterSpacing: "2px",
                }}
                required
              />
            </div>
          </div>
          <div className="mt-4 ml-8 flex flex-row">
            <div
              className="p-4 bg-[#000033] w-[140px]  sm:w-[240px] text-center text-[22px] sm:text-[32px] text-[#00ff99] rounded-full"
              style={{
                fontFamily: "pextrabold",
                lineHeight: 1,
              }}
            >
              Telefono:
            </div>
            <div className="w-full pr-10 ">
              <input
                className="h-10 m-4 border-b-4 focus:outline-none focus:ring-0 sm:text-[34px] text-[18px] pl-4 border-gray-900 text-[#4741f2] rounded-sm  w-full"
                type="text"
                id="telefono"
                name="telefono"
                defaultValue={telefonow}
                onChange={(e) => setTelefonow(e.target.value)}
                style={{
                  fontFamily: "pbold",
                  lineHeight: 1,
                  letterSpacing: "2px",
                }}
                required
              />
            </div>
          </div>
          <div className="mt-4 ml-8 flex flex-row">
            <div
              className="p-4 bg-[#000033] w-[140px]  sm:w-[240px] text-center text-[22px] sm:text-[32px] text-[#00ff99] rounded-full"
              style={{
                fontFamily: "pextrabold",
                lineHeight: 1,
              }}
            >
              E-Mail:
            </div>
            <div className="w-full pr-10 ">
              <input
                className="h-10 m-4 border-b-4 pl-4 focus:outline-none focus:ring-0 text-[18px] border-gray-900 text-[#4741f2] rounded-sm w-full"
                type="email"
                id="email"
                name="email"
                onChange={(e) => setEmailw(e.target.value)}
                defaultValue={emailw}
                style={{
                  fontFamily: "pbold",
                  lineHeight: 1,
                  letterSpacing: "2px",
                }}
                required
              />
            </div>
            
          </div>
          <div className="mt-8 flex flex-row place-content-center">
            <button
              type="submit"
             
              id="buttonenviar"
              class="text-[#000033] text-[22px] sm:text-[32px] bg-[#00ff99] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full px-10 py-3 text-center me-2 mb-2"
              style={{ fontFamily: "pextrabold", letterSpacing: "2px" }}
            >
              ENVIAR
            </button>
          </div>
          </td>
        </tr>
      </table></form>

              <div className='flex flex-row place-content-center'>
                <form onSubmit={guardar2}>
      <table className="sm:hidden block " width="100%" align="center">
        <tr>
          <td align='center'>
            <br />
            <br />
          <img src={logo}  />
          </td>
          </tr>
          <tr>
          <td valign="top">
          <div className="mt-4 ml-8 flex flex-row">
            <div
              className="pt-6 p-2 bg-[#000033] w-[100px]  sm:w-[240px] text-center text-[16px] text-[#00ff99] rounded-[20px]"
              style={{
                fontFamily: "pextrabold",
                lineHeight: 1,
              }}
            >
              Nombre:
            </div>
            <div className="w-full pr-10 ">
              <input
                className="h-8 m-4 border-b-4 focus:outline-none focus:ring-0 sm:text-[34px] text-[18px] pl-4 border-gray-900 text-[#4741f2] rounded-sm  w-full"
                type="text"
                id="nombremobil"
                name="nombremobil"
                defaultValue={nombrew}
                onChange={(e) => setNombrew(e.target.value)}
                style={{
                  fontFamily: "pbold",
                  lineHeight: 1,
                  letterSpacing: "2px",
                }}
                required
              />
            </div>
          </div>
          <div className="mt-4 ml-8 flex flex-row">
            <div
              className="pt-6 p-2 bg-[#000033] w-[100px]  sm:w-[240px] text-center text-[16px] text-[#00ff99] rounded-[20px]"
              style={{
                fontFamily: "pextrabold",
                lineHeight: 1,
              }}
            >
              Apellido:
            </div>
            <div className="w-full pr-10 ">
              <input
                className="h-8 m-4 border-b-4 focus:outline-none focus:ring-0 sm:text-[34px] text-[18px] pl-4 border-gray-900 text-[#4741f2] rounded-sm  w-full"
                type="text"
                id="apellidomobil"
                name="apellidomobil"
                defaultValue={apellidow}
                onChange={(e) => setApellidow(e.target.value)}
                
                style={{
                  fontFamily: "pbold",
                  lineHeight: 1,
                  letterSpacing: "2px",
                }}
                required
              />
            </div>
          </div>
          <div className="mt-4 ml-8 flex flex-row">
            <div
              className="pt-6 p-2 bg-[#000033] w-[100px]  sm:w-[240px] text-center text-[16px] text-[#00ff99] rounded-[20px]"
              style={{
                fontFamily: "pextrabold",
                lineHeight: 1,
              }}
            >
              Telefono:
            </div>
            <div className="w-full pr-10 ">
              <input
                className="h-8 m-4 border-b-4 focus:outline-none focus:ring-0 sm:text-[34px] text-[18px] pl-4 border-gray-900 text-[#4741f2] rounded-sm  w-full"
                type="text"
                id="telefonomobil"
                name="telefonomobil"
                defaultValue={telefonow}
                onChange={(e) => setTelefonow(e.target.value)}
                
                style={{
                  fontFamily: "pbold",
                  lineHeight: 1,
                  letterSpacing: "2px",
                }}
                required
              />
            </div>
          </div>
          <div className="mt-4 ml-8 flex flex-row">
            <div
              className="pt-6 p-2 bg-[#000033] w-[100px]  sm:w-[240px] text-center text-[16px] text-[#00ff99] rounded-[20px]"
              style={{
                fontFamily: "pextrabold",
                lineHeight: 1,
              }}
            >
              E-Mail:
            </div>
            <div className="w-full pr-10 ">
              <input
                className="h-8 m-4 border-b-4 focus:outline-none focus:ring-0 sm:text-[34px] text-[18px] pl-4 border-gray-900 text-[#4741f2] rounded-sm  w-full"
                type="email"
                id="emailmobil"
                name="emailmobil"
                defaultValue={emailw}
                onChange={(e) => setEmailw(e.target.value)}
                style={{
                  fontFamily: "pbold",
                  lineHeight: 1,
                  letterSpacing: "2px",
                }}
                required
              />
            </div>
          </div>
       
          <div className="mt-8 flex flex-row place-content-center">
            <button
              type="submit"
              
              id="botonenviar2"
              class="text-[#000033] text-[22px] sm:text-[32px] bg-[#00ff99] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full px-10 py-3 text-center me-2 mb-2"
              style={{ fontFamily: "pextrabold", letterSpacing: "2px" }}
            >
              ENVIAR
            </button>
          </div>
          </td>
          </tr>
        
      </table>
      </form></div>
   
</div>

    </div>

    <div>


 


      
      
              <br />
      
      <div className="piedepagina">

        <div style={{ fontFamily: "pextrabold", letterSpacing: "6px", color: 'white' }} className=" pt-[40px] sm:pt-[150px] text-[12px] sm:text-[32px] flex flex-row place-content-center items-center justify-center"><a className='flex flex-row place-content-center' href='https://www.instagram.com/01.asistentevirtual/' target='_blank'><span className='mt-[-10px] sm:mt-2'><svg class="w-[32px] h-[32px] text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd"/>
</svg>
</span><span className='ml-2'>01.ASISTENTEVIRTUALSAS.COM</span></a></div>
      </div>

    </div>
    

    {salir ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-lg">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none bg-white">
                {/*body*/}
                <div className="h-20 bg-[#6633cc] rounded-t-lg place-content-center flex flex-grow text-white text-2xl font-semibold font-mono">
                  <span className="mt-6 pl-2" style={{ fontFamily: "pextrabold", letterSpacing: "2px" }} >Gracias Por tu Registro</span>
                </div>
                <div className="relative p-1 flex-auto">
                  <div className="p-1 md:p-1 text-center">
                    <div>
                      <div className="p-2 md:p-2 font-bold text-center">
                        
                      <div id="gracias" className="text-[16px]  text-[#000033] sm:text-[24px] mt-10 flex flex-row place-content-center" style={{fontFamily: 'pextrabold'}}>
                      ¡Muy pronto nos comunicaremos contigo! Tu plantilla editable para la gestión del tiempo se descargará en un momento.
            </div>
  
            <div id="gracias2" className="text-[14px] w-[100%] text-blue-800 sm:text-[18px] text-center mt-10" style={{fontFamily: 'pextrabold'}}>
            Puedes abrir el documento <a class='text-blue-400 cursor-pointer' href='/matriz.pptx' target='_blank'> AQUI </a> si no abre automáticamente
              </div>
            
            
  

                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-18 bg-[#6633cc] rounded-b-lg place-content-end flex flex-grow text-cyan-300 text-2xl font-semibold font-mono">
                  <button
                    type="button"
                    onClick={() => {
                      setSalir(false);
                    }}
                    data-modal-hide="popup-modal"
                    class="m-2 text-gray-900 bg-[#2ae69a] hover:bg-[#00ff99]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
                  >
                    <svg
                      class="w-6 h-6 text-gray-800 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    &nbsp;Cerrar
                  </button>
               
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

  
    </>
  );
}

export default Home;
