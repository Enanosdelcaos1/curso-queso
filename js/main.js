document.addEventListener('DOMContentLoaded', () => {
  document.body.style.cursor = 'url("img/raton1.png") 16 16, auto';

  const frases = [
    "¡GRACIAS! Estoy sobre el queso 🧀",
    "¡Huele delicioso este queso! 😋",
    "¿Compartimos un trozo? 🧀✨",
    "¡Cuidado! Este queso es adictivo 😄",
    "¡Queso, queso, queso por todos lados! 🧀"
  ];
  let indice = 0;

  const miBotonQueso = document.createElement('button');
  miBotonQueso.style.background = 'transparent';
  miBotonQueso.style.border = 'none';
  miBotonQueso.style.cursor = 'url("img/raton1.png") 16 16, auto';

  const miImagenQueso = document.createElement('img');
  miImagenQueso.src = "img/queso.png";
  miImagenQueso.alt = "Soy una rueda de queso";
  miImagenQueso.style.width = "200px";
  miImagenQueso.style.height = "auto";
  miBotonQueso.appendChild(miImagenQueso);
  document.body.appendChild(miBotonQueso);

  const miFrase = document.createElement('h3');
  miFrase.textContent = "Pasa el ratón por encima del queso";
  document.body.appendChild(miFrase);

  const actualizarFrase = nuevaFrase => {
    miFrase.textContent = nuevaFrase;
  };

  miBotonQueso.addEventListener('mouseenter', () => {
    actualizarFrase(frases[indice]);
    indice = (indice + 1) % frases.length;
  });

  miBotonQueso.addEventListener('mouseleave', () => {
    miFrase.textContent = "Pasa el ratón por encima del queso";
  });
});
