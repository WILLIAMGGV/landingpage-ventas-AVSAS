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

function App() {
  
  
  const guardar = async () => {
    // Obtener los valores de los campos de entrada
    const data = {
      nombre: document.getElementById("nombre").value,
      apellido: document.getElementById("apellido").value,
      telefono: document.getElementById("telefono").value,
      email: document.getElementById("email").value,
    };
  
    console.log(data);
    console.log(process.env.REACT_APP_API_URL);
  
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
      console.log(result);
      document.getElementById("gracias").innerHTML = "Gracias por Registrarte...";
      document.getElementById("gracias2").innerHTML = "Puedes abrir el documento <a class='text-blue-400 cursor-pointer' href='/matriz.pptx' target='_blank'> AQUI </a> si no abre automáticamente";
      
      document.getElementById("nombre").value=""
      document.getElementById("apellido").value=""
      document.getElementById("telefono").value=""
      document.getElementById("email").value=""

      const enlace = document.createElement('a');
    enlace.href = '/matriz.pptx'; // Ruta al archivo en la carpeta public
    enlace.download = 'matriz.pptx'; // Nombre del archivo que se descargará
    document.body.appendChild(enlace); // Añadir el enlace al DOM
    enlace.click(); // Simular un clic en el enlace
    document.body.removeChild(enlace);
    
    
    
    } catch (error) {
      console.error('Error:', error);
      document.getElementById("gracias").innerHTML = "Ocurrió un error. Por favor, intenta nuevamente. Detalle: " + error.message;
    }
  };
  return (
    <>
    <div>
    <div className="fondo1 flex flex-row place-content-center" >
      <img src={titulo1} className="sm:w-auto w-[100%]" alt="" />
      <br />
    </div>

    <div className="fondo2">

    <div className="flex flex-row place-content-center">
      
              <img src={palabra1} width="50%" alt="" className=" mt-8"  />
            </div>

            <div className="flex flex-row place-content-center">
              <img src={palabra2} alt="" width="95%"  />
            </div>


       
    </div>

  
    <div className="fondo3">

<div className="flex flex-row place-content-center mt-[350px]">
          <img src={hombre} alt=""  />
        </div>

        <div className="flex flex-row place-content-center">
          <img src={registrate} width="90%" alt=""  />
        </div>
      
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
                defaultValue=""
                style={{
                  fontFamily: "pbold",
                  lineHeight: 1,
                  letterSpacing: "2px",
                }}
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
                defaultValue=""
                style={{
                  fontFamily: "pbold",
                  lineHeight: 1,
                  letterSpacing: "2px",
                }}
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
                defaultValue=""
                style={{
                  fontFamily: "pbold",
                  lineHeight: 1,
                  letterSpacing: "2px",
                }}
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
                type="text"
                id="email"
                name="email"
                defaultValue=""
                style={{
                  fontFamily: "pbold",
                  lineHeight: 1,
                  letterSpacing: "2px",
                }}
              />
            </div>
            
          </div>
          <div className="mt-8 flex flex-row place-content-center">
            <button
              type="button"
              onClick={() => {
                guardar();
              }}
              class="text-[#000033] text-[22px] sm:text-[32px] bg-[#00ff99] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full px-10 py-3 text-center me-2 mb-2"
              style={{ fontFamily: "pextrabold", letterSpacing: "2px" }}
            >
              ENVIAR
            </button>
          </div>
          </td>
        </tr>
      </table>
   
</div>

    </div>

    <div>


    <div className="hidden place-content-center mt-16">

     

              <table className="sm:hidden block" width="100%">
               <tr>
                <td align="center"><img src={logo}  /></td>
               </tr>
               <tr>
                <td>
                <div className="mt-4 ml-8 flex flex-row">
            <div
              className="p-4 bg-[#0cf29e] mt-2 w-[140px]  sm:w-[240px] text-center text-[20px] sm:text-[32px] text-[#5d43ff] rounded-full"
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
                defaultValue=""
                style={{
                  fontFamily: "pbold",
                  lineHeight: 1,
                  letterSpacing: "2px",
                }}
              />
            </div>
          </div>
          <div className="mt-4 ml-8 flex flex-row">
          <div
              className="p-4 bg-[#0cf29e] mt-2 w-[140px]  sm:w-[240px] text-center text-[20px] sm:text-[32px] text-[#5d43ff] rounded-full"
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
                defaultValue=""
                style={{
                  fontFamily: "pbold",
                  lineHeight: 1,
                  letterSpacing: "2px",
                }}
              />
            </div>
          </div>
          <div className="mt-4 ml-8 flex flex-row">
          <div
              className="p-4 bg-[#0cf29e] mt-2 w-[140px]  sm:w-[240px] text-center text-[20px] sm:text-[32px] text-[#5d43ff] rounded-full"
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
                defaultValue=""
                style={{
                  fontFamily: "pbold",
                  lineHeight: 1,
                  letterSpacing: "2px",
                }}
              />
            </div>
          </div>
          <div className="mt-4 ml-8 flex flex-row">
          <div
              className="p-4 bg-[#0cf29e] mt-2 w-[140px]  sm:w-[240px] text-center text-[20px] sm:text-[32px] text-[#5d43ff] rounded-full"
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
                type="text"
                id="email"
                name="email"
                defaultValue=""
                style={{
                  fontFamily: "pbold",
                  lineHeight: 1,
                  letterSpacing: "2px",
                }}
              />
            </div>
            
          </div>
          <div className="mt-8 flex flex-row place-content-center">
            <button
              type="button"
              onClick={() => {
                guardar();
              }}
              class="text-white text-[22px] sm:text-[32px] bg-gradient-to-r from-[#4741f2] to-[#7648d9] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full px-10 py-3 text-center me-2 mb-2"
              style={{ fontFamily: "pbold", letterSpacing: "2px" }}
            >
              ENVIAR
            </button>
          </div>
                </td>
               </tr>
              </table>


    <div className="hidden sm:flex-row sm:place-content-center place-content-center">
          <img src={logo} className="w-[60%] ml-16 sm:ml-0" />

          <div>
          <div className="mt-4 ml-8 flex flex-row">
            <div
              className="p-4 bg-[#0cf29e] w-[140px]  sm:w-[240px] text-center text-[22px] sm:text-[32px] text-[#5d43ff] rounded-lg"
              style={{
                fontFamily: "pextrabold",
                lineHeight: 1,
              }}
            >
              Nombre:
            </div>
            <div className="w-full pr-10 ">
              <input
                className="h-10 m-4 border-b-4 focus:outline-none focus:ring-0 sm:text-[34px] text-[18px] text-center border-gray-900 text-[#4741f2] rounded-sm  w-full"
                type="text"
                id="nombre"
                name="nombre"
                defaultValue=""
                style={{
                  fontFamily: "pbold",
                  lineHeight: 1,
                  letterSpacing: "2px",
                }}
              />
            </div>
          </div>
          <div className="mt-4 ml-8 flex flex-row">
            <div
              className="p-4 bg-[#0cf29e] w-[140px]  sm:w-[240px] text-center text-[22px] sm:text-[32px] text-[#5d43ff] rounded-lg"
              style={{
                fontFamily: "pextrabold",
                lineHeight: 1,
              }}
            >
              Apellido:
            </div>
            <div className="w-full pr-10 ">
              <input
                className="h-10 m-4 border-b-4 focus:outline-none focus:ring-0 sm:text-[34px] text-[18px] text-center border-gray-900 text-[#4741f2] rounded-sm  w-full"
                type="text"
                id="apellido"
                name="apellido"
                defaultValue=""
                style={{
                  fontFamily: "pbold",
                  lineHeight: 1,
                  letterSpacing: "2px",
                }}
              />
            </div>
          </div>
          <div className="mt-4 ml-8 flex flex-row">
            <div
              className="p-4 bg-[#0cf29e] w-[140px]  sm:w-[240px] text-center text-[22px] sm:text-[32px] text-[#5d43ff] rounded-lg"
              style={{
                fontFamily: "pextrabold",
                lineHeight: 1,
              }}
            >
              Telefono:
            </div>
            <div className="w-full pr-10 ">
              <input
                className="h-10 m-4 border-b-4 focus:outline-none focus:ring-0 sm:text-[34px] text-[18px] text-center border-gray-900 text-[#4741f2] rounded-sm  w-full"
                type="text"
                id="telefono"
                name="telefono"
                defaultValue=""
                style={{
                  fontFamily: "pbold",
                  lineHeight: 1,
                  letterSpacing: "2px",
                }}
              />
            </div>
          </div>
          <div className="mt-4 ml-8 flex flex-row">
            <div
              className="p-4 bg-[#0cf29e] w-[140px]  sm:w-[240px] text-center text-[22px] sm:text-[32px] text-[#5d43ff] rounded-lg"
              style={{
                fontFamily: "pextrabold",
                lineHeight: 1,
              }}
            >
              E-Mail:
            </div>
            <div className="w-full pr-10 ">
              <input
                className="h-10 m-4 border-b-4 focus:outline-none focus:ring-0 text-[18px] text-center border-gray-900 text-[#4741f2] rounded-sm  w-full"
                type="text"
                id="email"
                name="email"
                defaultValue=""
                style={{
                  fontFamily: "pbold",
                  lineHeight: 1,
                  letterSpacing: "2px",
                }}
              />
            </div>
            
          </div>
          <div className="mt-8 flex flex-row place-content-center">
            <button
              type="button"
              onClick={() => {
                guardar();
              }}
              class="text-white text-[22px] sm:text-[32px] bg-gradient-to-r from-[#4741f2] to-[#7648d9] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full px-10 py-3 text-center me-2 mb-2"
              style={{ fontFamily: "pbold", letterSpacing: "2px" }}
            >
              ENVIAR
            </button>
          </div>
          
          </div>
          
        </div>
     
      </div>

      <div id="gracias" className="text-[22px]  text-green-500 sm:text-[32px] mt-10 flex flex-row place-content-center" style={{fontFamily: 'pextrabold'}}>
            
          </div>

          <div id="gracias2" className="text-[18px] w-[100%] text-blue-800 sm:text-[28px] text-center mt-10" style={{fontFamily: 'pextrabold'}}>
            
            </div>
          
          

      
              <br />
      
      <div className="piedepagina">

        <div style={{ fontFamily: "pextrabold", letterSpacing: "6px", color: 'white' }} className=" pt-[150px] text-[32px] flex flex-row place-content-center items-center justify-center">01.ASISTENTEVIRTUALSAS.COM</div>
      </div>

    </div>
    

  
    </>
  );
}

export default App;
