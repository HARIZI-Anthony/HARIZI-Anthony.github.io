const target = document.getElementById("target");
let array = ["Développeur", "Technicien", "Team-Leader"];
let wordIndex = 0;
let letterIndex = 0;

//creation d'une fonction pour création de lettre
// Ici le span sera généré dans l'HTML
// Puis appelé à la fin

const createLetter = () => {
    const letter = document.createElement("span");
    target.appendChild(letter);
    letter.textContent = array[wordIndex][letterIndex];

    // creation d'une loop qui viendra rejouer en boucle la scene
    // mise en place de timeout qui gere le temps
    // utilisation de if ()
    // si letterIndex est inférieur au tableau (array)
    // Si dans ce tableau wordindex correspondant au premier mot
    // Ajout de lenght pour être inférieur à la longueur de ce mot

    setTimeout(() => {
        letter.remove();
    }, 2800);
};

const loop = () => {
    setTimeout(() => {
        if (wordIndex >= array.length) {
            wordIndex = 0;
            letterIndex = 0;
            loop();
        } else if (letterIndex < array[wordIndex].length) {
            createLetter();
            letterIndex++;
            loop();
        } else {
            wordIndex++;
            letterIndex = 0;
            setTimeout(() => {
                loop();
            }, 2800);
        }
    }, 80);
};
loop();

