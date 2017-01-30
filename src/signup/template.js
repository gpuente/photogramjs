var yo = require('yo-yo');

module.exports = yo`<div class="container">
      <div class="row">
        <div class="col s10 push-s1">
          <div class="row">
            <div class="col m5 hide-on-small-only">
              <img class="iphone" src="iphone.png" alt="">
            </div>
            <div class="col s12 m7">
              <div class="row">
                <div class="signup-box">
                  <h1 class="photogram">Photogram js</h1>
                  <form action="" class="signup-form">
                    <h2>Regístrate para acceder a la plataforma</h2>
                    <div class="section">
                      <a href="" class="btn btn-fb hide-on-small-only">Iniciar Sesión con Facebook</a>
                      <a href="" class="btn btn-fb hide-on-med-and-up">Iniciar Sesión</a>
                    </div>
                    <div class="divider"></div>
                    <div class="section">
                      <input type="email" name="email" id="email" placeholder="Correo Eléctronico">
                      <input type="text" name="name" id="name" placeholder="Nombre Completo">
                      <input type="text" name="username" id="username" placeholder="Nombre de usuario">
                      <input type="password" name="password" id="password" placeholder="Contraseña">
                      <button class="waves-effect waves-light btn btn-signup" type="submit">Regístrate</button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="row">
                <div class="login-box">
                  ¿Ya tienes una cuenta? <a href="/signin">Entrar</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`