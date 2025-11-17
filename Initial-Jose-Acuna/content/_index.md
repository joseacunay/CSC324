---
title: .
description: .
cascade:
  featured_image: '/images/joe.jpg'
---
<!-- Contenedor general para centrar todo -->
<div style="text-align: center;">

  <!-- GIF centrado -->
  <img class="image-top-250" src="/images/tt.gif" alt="Animated GIF">

  <!-- Texto con efecto typing -->
  <div id="typing-text" class="typing-text"></div>
</div>

<style>
/* GIF centrado y tamaño controlado */
.image-top-250 {
    display: block;
    margin: 0 auto 20px auto;
    max-width: 350px;
    height: auto;
}

/* Texto */
.typing-text {
    font-size: 50px;
    font-family: 'Courier New', Courier, monospace;
    line-height: 1.6;
    display: inline-block;
    max-width: 800px;
}

/* Animación de colores */
.typing-letter {
    animation: color-change 4s infinite alternate;
}

@keyframes color-change {
    0% { color: #ff4d4d; }
    25% { color: #4d79ff; }
    50% { color: #4dff88; }
    75% { color: #ffb84d; }
    100% { color: #ff4d4d; }
}
</style>

<script>
const text = `Welcome to my digital space. ;)`;
const container = document.getElementById('typing-text');
let index = 0;

function typeLetter() {
    if(index < text.length){
        let span = document.createElement('span');
        span.className = 'typing-letter';
        span.textContent = text[index];
        container.appendChild(span);
        index++;
        setTimeout(typeLetter, 100);
    } else {
        // Cuando termina de escribir, espera 1 segundo y reinicia
        setTimeout(() => {
            container.innerHTML = ''; // borra el texto
            index = 0;               // reinicia el índice
            typeLetter();            // vuelve a escribir
        }, 1000);
    }
}

// Inicia el efecto
typeLetter();
</script>
