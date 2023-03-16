import { TbUserCircle } from "react-icons/tb";

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
            <div className="form-control md:col-span-2">
              <label className="label">
                <span className="label-text">Nombre</span>
              </label>
              <input
                type="text"
                placeholder="Nombre"
                className="input input-bordered w-12/12"
              />
            </div>
            {/* Input and Label First Last Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Primer Apellido</span>
              </label>
              <input
                type="text"
                placeholder="primer apellido"
                className="input input-bordered w-12/12"
              />
            </div>
            {/* Input and Label Second Last Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Segundo Apellido</span>
              </label>
              <input
                type="text"
                placeholder="segundo apellido"
                className="input input-bordered w-12/12"
              />
            </div>
            {/* Input and Label Email */}
            <div className="form-control md:col-span-2">
              <label className="label">
                <span className="label-text">Correo</span>
              </label>
              <input
                type="email"
                placeholder="correo"
                className="input input-bordered w-12/12"
              />
            </div>
            {/* Input and Label Password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Contraseña</span>
              </label>
              <input
                type="password"
                placeholder="Contraseña"
                className="input input-bordered w-12/12"
              />
            </div>
            {/* Input and Label Confirm Password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirma tu contraseña</span>
              </label>
              <input
                type="password"
                placeholder="Contraseña"
                className="input input-bordered w-12/12"
              />
            </div>
            {/* Input and Label Phone */}
            <div className="form-control md:col-span-2">
              <label className="label">
                <span className="label-text">Telefono</span>
              </label>
              <input
                type="tel"
                placeholder="Telefono"
                className="input input-bordered w-12/12"
              />
            </div>
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
