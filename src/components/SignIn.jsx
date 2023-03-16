function Register() {
  return (
    <div className="max-h-fit ls:hero ls:bg-base-200 md:min-h-screen md:hero">
      <div className="h-full ls:hero-content ls:w-9/12 md:w-9/12 sm:h-min">
        <form className="card shadow-2xl bg-base-100 ls:w-full">
          <div className="card-body grid grid-cols-1 lg:grid-cols-2">
            {/* Input and Label Name User */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Nombre</span>
              </label>
              <input
                type="text"
                placeholder="Nombre"
                className="input input-bordered w-11/12"
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
                className="input input-bordered w-11/12"
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
                className="input input-bordered w-11/12"
              />
            </div>
            {/* Input and Label Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Correo</span>
              </label>
              <input
                type="email"
                placeholder="correo"
                className="input input-bordered w-11/12"
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
                className="input input-bordered w-11/12"
              />
            </div>
            {/* Input and Label Phone */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Telefono</span>
              </label>
              <input
                type="tel"
                placeholder="Telefono"
                className="input input-bordered w-11/12"
              />
            </div>
            {/* Input and Label Status */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Estatus</span>
              </label>
              <select className="select select-bordered w-11/12">
                <option>A</option>
                <option>D</option>
              </select>
            </div>
          </div>
          <div className="card-body">
            <input type="submit" value="Registrar" className="btn btn-outline"/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
