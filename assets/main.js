// Mostrar botão "voltar ao topo" ao rolar a página
window.addEventListener('scroll', function () {
    const btn = document.getElementById('topo');
    if (window.scrollY > 300) {
      btn.style.display = 'block';
    } else {
      btn.style.display = 'none';
    }
  });
  
  // Comportamento do botão (pode ser direto no HTML, ou aqui)
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  let curtidas = 0;

function curtirPost() {
  curtidas++;
  document.getElementById("likeCount").innerText = curtidas;
  document.getElementById("likeBtn").disabled = true;
  document.getElementById("likeBtn").innerText = "👍 Obrigado!";
}
