import { cerrarSesion } from '../model/modelFirebase.js';

export default () => {
  const viewHome = ` 
    <header class="barra-menu" id="barra-menu">
  <div class="contenedor-logo">
    <img class="logo-menu" src="./img/logoMenu2.png" alt="Logo live & travel" />
  </div>
  <div class="contenedor-menu">
    <input type="checkbox" id="btn-menu">
    <label class="glyphicon glyphicon-align-justify" for="btn-menu"></label>
    <nav class="menu">
      <ul>
        <li id="btn-perfil"><a> PERFIL </a></li>
        <li id="btn-cerrar"><a>CERRAR SESIÓN</a></li>
      </ul>
    </nav>
  </div>
</header>
<div id="vista-home" class="container-post">
  <div class="profile-content">
  <div class="content">
    <div id="datos-user">
      <img class="foto-user" id="foto" src="img/user.png" />
      <div class="datos">
        <label class="profile-name" id="name" for="name"></label>
        <label id="correo" class="profile-name" for="name"></label>
      </div>
    </div>
  
  <div class="postear">
    <div class="post">
      <textarea  name="post" id="new-post" cols="30" rows="5" placeholder="¿Qué quieres compartir?"></textarea>
      <div class="comparte">
      <image class="glyphicon glyphicon-picture" src=""/>
       <button  id="btn-compartir"class="compartir">Compartir</>
      </div>
    </div>
    </div>
    </div>
  </div>
</div>`;
  const divElem = document.createElement('div');
  divElem.innerHTML = viewHome;
  const btnCerrar = divElem.querySelector('#btn-cerrar');
  const btnPerfil = divElem.querySelector('#btn-perfil');
  const btnCompartir = divElem.querySelector('#btn-compartir');
  btnCerrar.addEventListener('click', (e) => {
    e.preventDefault();
    cerrarSesion();
    window.location.hash = '#/';
  });
  btnPerfil.addEventListener('click', () => {
    window.location.hash = '#/perfil';
  });
  btnCompartir.addEventListener('click', () => {

  });
  return divElem;
};

