
   function adicionarImagem() {
      if (imagemAdicionada) return; // Se já adicionou, não faz nada

      const img = document.createElement("img");
      img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR26RDealcoBC6zmiNAgb5Uxbe4n1NsYFyPuQ&s";
      img.alt = "Imagem adicionada";
      img.style.marginTop = "10px";

      document.getElementById("mamaco").appendChild(img);
      imagemAdicionada = true; // Marca como já adicionada
    }
    
