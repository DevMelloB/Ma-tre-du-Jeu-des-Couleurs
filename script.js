
        // Tableau de 9 couleurs
    const colors = ["#CC0000", "#009999", "#5733FF", "#FF3399", "#00CC00", "#FFFF66", "#A533FF", "#FF8C33", "#3380FF"];
        let playerChoices = [];
        let targetOrder = [];
        let score = 0;
         // Fonction pour commencer le jeu
    function startGame() {
        playerOrder = [];
        targetOrder = [];
    
     // Obtenir trois couleurs aléatoires uniques du tableau de couleurs
     while (targetOrder.length < 3) {
          const randomColor = colors[Math.floor(Math.random() * colors.length)];
          if (!targetOrder.includes(randomColor)) targetOrder.push(randomColor);
        }
    
        // Assigner les couleurs aléatoires aux divs
        const colorDivs = document.querySelectorAll(".colorDiv");
        colorDivs.forEach((div, index) => {
          div.style.backgroundColor = targetOrder[index];
        });
    
        // Montrer les couleurs pendant 5 secondes
        setTimeout(() => {
          colorDivs.forEach(div => div.style.backgroundColor = "");
        }, 5000);
    
        // Efafcer le contenu du message et afficher les boutons de couleurs
        document.getElementById("message").textContent = "";
        displayColorButtons();
      }
    
      // Effacer le contenu du message et monter rien dans le conteneur des boutons
      function displayColorButtons() {
        const buttonArea = document.getElementById("buttonArea");
        buttonArea.innerHTML = ""; 
    
        // créer des boutons de couleurs du tableau
        colors.forEach(color => {
          const button = document.createElement("button");
          button.className = "colorButton";
          button.style.backgroundColor = color;
          button.onclick = () => handleColorClick(color);
          buttonArea.appendChild(button);
        });
      }
    
      // Fonction pour traiter le clic sur un bouton de couleur
      function handleColorClick(color) {
        playerOrder.push(color);
    
        // Verifier si le joueur a reussi de memoriser l'ordre des couleurs
        if (playerOrder.length === targetOrder.length) {
          if (playerOrder.join() === targetOrder.join()) {
            // Augmenter le score
            score +=10;
            // Afficher le score et soit un message de victoire ou soit un message de defaite
             document.getElementById("message").textContent = "Vous avez gagné!"; 
             document.getElementById("score").textContent = "Score: " + score;  
          } else {
            document.getElementById("message").textContent = "Ordre incorrect. Recommencez!"; 
          }
        }
      }