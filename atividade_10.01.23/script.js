const linkPerfil = document.getElementById("link-perfil");
const navPerfil = document.getElementById("nav-perfil");
const linkDados = document.getElementById("link-perfil-dados");
const voltar = document.getElementById("voltar");

window.addEventListener('keydown', (event)=> {
    console.log(linkDados);
    
  if (event.code === 'Digit1') {
      if (navPerfil.style.display == 'block') {
      linkDados.click();
   } else {
      navPerfil.style.display = 'block';
   }
  } 
  if (event.code === 'Escape') {
      navPerfil.style.display = 'none';
  }
  if (event.code === 'Backspace') {
      voltar.click();
  }
})

//linkPerfil.addEventListener("mouseover", ()=> {
//  navPerfil.style.display = "block"
//})

//window.addEventListener('keyup', (event)=> {
//  console.log(event);

//  if (event.key === '1') {
//    navPerfil.style.display = "block";
//  } if (event.key === 'Escape') {
//    navPerfil.style.display = "none";
//  } 
//})

//window.addEventListener('keyup', (event)=> {
//  console.log(event);

//if (event.code === 'Digit1') {
//    navPerfil.style.display = "block";
// } 
//})







