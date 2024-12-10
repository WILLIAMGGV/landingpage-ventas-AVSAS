import "./App.css";
import titulo1 from "./img/png-03.png";
import titulo2 from "./img/png-04.png";
import logo from "./img/png-09.png";

function App() {
  return (
    <>
      <div className="relative  h-[300px] bg-gradient-to-r from-[#4741f2] to-[#7648d9]">
        <div className="absolute fondo1 w-full h-full flex flex-row place-content-center">
          <img className="h-full" src={titulo1} />
        </div>
      </div>

      <div className="relative fondo2 pb-[100px]  w-full h-full grid grid-cols-2 gap-2 place-content-around">
        <div className="ml-[50px] mt-[100px] flex flex-row place-content-end">
          <img className="" src={titulo2} width="600px" height="200px" />
        </div>
        <div className="mt-16">
          <div className="bg-[#0cf29e] text-center font-extrabold rounded-xl mt-4 p-4 w-[80%]">
            <span
              className="text-[#5d43ff] text-[42px]"
              style={{ fontFamily: "pextrabold", lineHeight: 1 }}
            >
              Contrata un Asistente de Atención al cliente
            </span>
          </div>
          <div className="bg-[#0cf29e] rounded-xl p-4 mt-4 w-[80%] text-justify">
            <span
              className="text-black text-[28px] font-bold ml-4 mr-4"
              style={{
                fontFamily: "pextrabold",
                fontWeight: "900",
                lineHeight: 1,
              }}
            >
              <span className="text-[#5d43ff] text-[28px] font-bold">
                Libérate
              </span>{" "}
              de las tareas administrativas, nuestras asistentes se encargarán
              del asesoramiento de precios y ubicaciones de las propiedades a
              tus clientes, de recepcionar y de dar respuestas ágiles a los
              mensajes de WhatsApp y correos electrónicos.
            </span>
          </div>
        </div>
      </div>

      <div className="relative h-[200px] bg-gradient-to-r from-[#4741f2] to-[#7648d9] p-4">
        <div
          className="text-center text-[52px] mt-4 text-white"
          style={{
            fontFamily: "pextrabold",
            lineHeight: 1,
            letterSpacing: "2px",
          }}
        >
          REGÍSTRATE Y OBTÉN UNA ASESORÍA
        </div>
        <div
          className="text-center text-[42px] mt-4 text-white"
          style={{
            fontFamily: "pligth",
            lineHeight: 1,
            letterSpacing: "1px",
          }}
        >
          con tu registro obtén plantilla gratis
        </div>
      </div>

      <div className="flex flex-row flex-grow place-content-center">
        <div className=" p-10">
          <img src={logo} width="400px" />
        </div>
        <div className="mt-8 mr-8">
          <div className="mt-4 flex flex-row">
            <div
              className="p-4 bg-[#0cf29e]  w-[240px] text-center text-[32px] text-[#5d43ff] rounded-lg"
              style={{
                fontFamily: "pextrabold",
                lineHeight: 1,
              }}
            >
              Nombre:
            </div>
            <div className="w-full pr-10 ">
              <input
                className="h-10 m-4 border-b-4 focus:outline-none focus:ring-0 text-[34px] text-center border-gray-900 text-[#4741f2] rounded-sm  w-full"
                type="text"
                id="nombre"
                name="nombre"
                defaultValue="hola"
                style={{
                  fontFamily: "pbold",
                  lineHeight: 1,
                  letterSpacing: "2px",
                }}
              />
            </div>
          </div>
          <div className="mt-4 flex flex-row">
            <div
              className="p-4 bg-[#0cf29e]  w-[240px] text-center text-[32px] text-[#5d43ff] rounded-lg"
              style={{
                fontFamily: "pextrabold",
                lineHeight: 1,
              }}
            >
              Apellido:
            </div>
            <div className="w-full pr-10 ">
              <input
                className="h-10 m-4 border-b-4 focus:outline-none focus:ring-0 text-[34px] text-center border-gray-900 text-[#4741f2] rounded-sm  w-full"
                type="text"
                id="nombre"
                name="nombre"
                defaultValue="hola"
                style={{
                  fontFamily: "pbold",
                  lineHeight: 1,
                  letterSpacing: "2px",
                }}
              />
            </div>
          </div>
          <div className="mt-4 flex flex-row">
            <div
              className="p-4 bg-[#0cf29e]  w-[240px] text-center text-[32px] text-[#5d43ff] rounded-lg"
              style={{
                fontFamily: "pextrabold",
                lineHeight: 1,
              }}
            >
              Telefono:
            </div>
            <div className="w-full pr-10 ">
              <input
                className="h-10 m-4 border-b-4 focus:outline-none focus:ring-0 text-[34px] text-center border-gray-900 text-[#4741f2] rounded-sm  w-full"
                type="text"
                id="nombre"
                name="nombre"
                defaultValue="hola"
                style={{
                  fontFamily: "pbold",
                  lineHeight: 1,
                  letterSpacing: "2px",
                }}
              />
            </div>
          </div>
          <div className="mt-4 flex flex-row">
            <div
              className="p-4 bg-[#0cf29e]  w-[240px] text-center text-[32px] text-[#5d43ff] rounded-lg"
              style={{
                fontFamily: "pextrabold",
                lineHeight: 1,
              }}
            >
              E-Mail:
            </div>
            <div className="w-full pr-10 ">
              <input
                className="h-10 m-4 border-b-4 focus:outline-none focus:ring-0 text-[26px] text-center border-gray-900 text-[#4741f2] rounded-sm  w-full"
                type="text"
                id="nombre"
                name="nombre"
                defaultValue="hola"
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
              class="text-white text-[32px] bg-gradient-to-r from-[#4741f2] to-[#7648d9] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full px-10 py-3 text-center me-2 mb-2"
              style={{ fontFamily: "pbold", letterSpacing: "2px" }}
            >
              ENVIAR
            </button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="App" style={{ fontFamily: "pbold" }}></div>
    </>
  );
}

export default App;
