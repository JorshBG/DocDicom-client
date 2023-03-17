import { TbUserCircle } from "react-icons/tb";
import {Input} from "./Input.jsx";

function Register() {
  return (
    <div className="max-h-fit bg-base-200 ls:hero md:min-h-screen md:hero">
      <div className="h-full ls:hero-content ls:w-9/12 md:w-9/12 sm:h-min">
        <form className="card shadow-2xl pt-32 bg-base-100 ls:w-full">
          <div className="card-body grid gap-6 grid-cols-1 md:grid-cols-2">
            <div className="md:col-span-2 relative flex justify-center">
              <TbUserCircle className="w-52 h-52 absolute -bottom-10 " />
            </div>
            {/* Input and Label Name User */}
            <Input text={'Nombre'} placeholder={'Nombre'} type={'text'} colspan={2}/>
            {/* Input and Label First Last Name */}
            <Input text={'Primer apellido'} placeholder={'primer apellido'} type={'text'}/>
            {/* Input and Label Second Last Name */}
            <Input text={'Segundo apellido'} placeholder={'segundo apellido'} type={'text'}/>
            {/* Input and Label Email */}
            <Input text={'Correo'} placeholder={'correo'} type={'email'} colspan={2}/>
            {/* Input and Label Password */}
            <Input text={'Contraseña'} placeholder={'contraseña'} type={'password'}/>
            {/* Input and Label Confirm Password */}
            <Input text={'Confirmar contraseña'} placeholder={'contraseña'} type={'password'}/>
            {/* Input and Label Phone */}
            <Input text={'Teléfono'} placeholder={'teléfono'} type={'tel'} colspan={2}/>
          </div>
          <div className="card-body">
            <input
              type="submit"
              value="Registrar"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
