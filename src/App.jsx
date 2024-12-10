import "./App.css";
import titulo1 from "./img/titulo1.png";
import titulo2 from "./img/titulo2.png";
import logo from "./img/logo.png";
import texto from "./img/texto.png";
import franja2 from "./img/franja2.png";

function App() {
  const guardar = () => {
    const data = {
      nombre: document.getElementById("nombre").value,
      apellido: document.getElementById("apellido").value,
      telefono: document.getElementById("telefono").value,
      email: document.getElementById("email").value,
    };

    console.log(data);

    fetch("http://localhost:3002/enviarcorreo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        if(result.message){
          document.getElementById("gracias").innerHTML = "Gracias por Registrarte..."
           document.getElementById("gracias2").innerHTML = "Puedes abrir el documento <a class='text-blue-400 cursor-pointer' href='https://docs.google.com/presentation/d/1UjdnzDRvBLJktn4Cx5Q8-6p2jydxQwvPEBNqae1DaVo/edit?usp=drive_web' target='_blanck'> AQUI </a> si no abre automaticamente"
          window.open("https://docs.google.com/presentation/d/1UjdnzDRvBLJktn4Cx5Q8-6p2jydxQwvPEBNqae1DaVo/edit?usp=drive_web", "_blank");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
    <div>
    <div className="fondo1 flex flex-row place-content-center" >
      <img src={titulo1} className="sm:w-auto w-[100%]" alt="" />
    </div>

    <div className="fondo2 flex flex-col md:flex-row flex-grow place-content-center">
            <div className="mt-8">
              <img src={titulo2} alt="" className="mt-8 sm:w-auto w-[100%]"  />
            </div>
            <div className="flex flex-col mt-4">
              <img src={texto} alt="" className="sm:w-auto w-[100%]" />
            </div>
    </div>

    <div className="mt-[80px] sm:mt-[-100px]">
    <img src={franja2} className="w-full" alt="" />
    </div>

    </div>

    <div>


    <div className="flex flex-row place-content-center mt-16">
    <div className="flex flex-col sm:flex-row sm:place-content-center place-content-center">
          <img src={logo} className="sm:w-auto w-[60%] ml-16 sm:ml-0" />

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


          <div id="gracias2" className="text-[18px]  text-blue-800 sm:text-[28px] mt-10 flex flex-row place-content-center" style={{fontFamily: 'pextrabold'}}>
            
            </div>

      
              <br />
      <br />
      <br />
      <br />
      <br />
      

    </div>


  
    </>
  );
}

export default App;
