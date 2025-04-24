document.getElementById("form-contato").addEventListener("submit", function (e) {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
  
    if (!nome || !email) {
      e.preventDefault();
      alert("Por favor, preencha nome e e-mail corretamente.");
    } else {
      alert("Mensagem enviada com sucesso!");
    }
  });
  
  // Exemplo: botão voltar ao topo
  window.addEventListener("scroll", () => {
    const btn = document.getElementById("topo");
    if (window.scrollY > 300) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  });