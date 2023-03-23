import { TbUserCircle } from "react-icons/tb";
import {Input} from "./Input.jsx";
import Header from "../partials/Header.jsx";

function Register() {
  const idForm = 'register_form';
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
              <h3 className="font-bold text-2xl">Registrate</h3>
            </section>

            <section className="mt-10">
              <form className="flex flex-col" id={idForm}>
                <div className='grid grid-cols-2 gap-1'>
                  <Input text={'Nombre'} type={'text'} id={`${idForm}->name`} colspan={2}/>
                  <Input text={'Apellido paterno'} type={'text'} id={`${idForm}->ap_father`}/>
                  <Input text={'Apeallido materno'} type={'text'} id={`${idForm}->ap_mother`}/>
                  <Input text={'Teléfono'} type={'tel'} id={`${idForm}->tel`}/>
                  <Input text={'Correo'} type={'email'} id={`${idForm}->email`}/>
                  <Input text={'Contraseña'} type={'password'} id={`${idForm}->password`}/>
                  <Input text={'Confirmar contraseña'} type={'password'} id={`${idForm}->con_password`}/>
                </div>
                <button
                    className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
                    type="submit">Registrarse
                </button>
              </form>
            </section>
          </div>

          <div className="max-w-lg mx-auto text-center mt-12 mb-6">
            <p className="text-white">¿Ya tienes cuenta? <a href="/login" className="font-bold hover:underline">Registrate</a>.
            </p>
          </div>
        </div>
    </>
  );
}

export default Register;
