// import {Input} from "./Input.jsx";
import '../styles/signup.css'
import Header from "../partials/Header.jsx";
function Login() {
  return (
      <>
      <Header showButtons={false}/>
    <div className={'body-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0'}>

      <header className="max-w-lg mx-auto">
        <a href="#">
          {/*<h1 className="text-4xl font-bold text-white text-center">Bienvenido</h1>*/}
          <br/><br/>
        </a>
      </header>

      <div className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
        <section>
          <h3 className="font-bold text-2xl">Inicia sesión en tu cuenta</h3>
        </section>

        <section className="mt-10">
          <form className="flex flex-col" method="POST" action="#">
            <div className="mb-6 pt-3 rounded bg-gray-200">
              <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="email">Correo</label>
              <input type="text" id="email"
                     className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"/>
            </div>
            <div className="mb-6 pt-3 rounded bg-gray-200">
              <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="password">Contraseña</label>
              <input type="password" id="password"
                     className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"/>
            </div>
            <div className="flex justify-end">
              <a href="#" className="text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6">¿Olvidaste tu contraseña?</a>
            </div>
            <button
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
                type="submit">Iniciar sesión
            </button>
          </form>
        </section>
      </div>

      <div className="max-w-lg mx-auto text-center mt-12 mb-6">
        <p className="text-white">¿Aún no tienes una cuenta? <a href="/signing" className="font-bold hover:underline">Registrate</a>.
        </p>
      </div>
    </div>
      </>
  );
}

export default Login;
