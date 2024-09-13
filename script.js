// Seleciona o input de busca
const searchInput = document.getElementById("searchInput");

// Adiciona um evento de escuta para o input, que será acionado toda vez que o usuário digitar
searchInput.addEventListener("keyup", function () {
  const query = searchInput.value.toLowerCase(); // Obtém o termo de pesquisa
  const newsItems = document.querySelectorAll(".news-item"); // Seleciona todas as notícias

  newsItems.forEach(function (item) {
    const title = item.querySelector("h2").textContent.toLowerCase(); // Obtém o título da notícia
    const content = item.querySelector("p").textContent.toLowerCase(); // Obtém o conteúdo da notícia

    // Verifica se o termo de pesquisa está no título ou no conteúdo
    if (title.includes(query) || content.includes(query)) {
      item.classList.remove("hidden"); // Mostra o artigo se corresponder à pesquisa
    } else {
      item.classList.add("hidden"); // Esconde o artigo se não corresponder
    }
  });
});
