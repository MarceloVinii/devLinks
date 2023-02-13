function toggleMode() {
  const html = document.documentElement //pegando o elemento
  html.classList.toggle("light") //fazendo as trocas das classes

  // pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
  } else {
    // se tiver sem light mode, manter a imagem normal
  }
}
