function Login() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-violet-500 text-7xl font-semibold">Bienvenido</h1>
          <p className="py-6 w-2/3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus impedit qui assumenda quis laudantium quibusdam debitis, neque possimus itaque ipsum, fuga labore odio ipsam, quasi ab nostrum? Culpa, nesciunt cumque?</p>
        </div>
        <form className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="text-lg font-medium">Correo</span>
              </label>
              <input
                type="email"
                placeholder="Escribe tu correo"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-lg font-medium">Contraseña</span>
              </label>
              <input
                type="password"
                placeholder="Escribe tu contraseña"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt text-violet-500 link link-hover">
                  ¿Aún no tienes cuenta?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Iniciar Sessión</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
