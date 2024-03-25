document.addEventListener('DOMContentLoaded', function() {
  var audio = document.getElementById("myAudio");
  audio.play();
});

document.addEventListener('DOMContentLoaded', function() {
  var fechaObjetivo = new Date('2024-04-26T19:00:00'); // Fecha objetivo (Año, Mes, Día, Horas, Minutos, Segundos)
  
  function actualizarContador() {
    var ahora = new Date();
    var diferencia = fechaObjetivo - ahora;

    var dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    var horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
    
    document.getElementById('dias').innerText = dias;
    document.getElementById('horas').innerText = horas;
    document.getElementById('minutos').innerText = minutos;
    document.getElementById('segundos').innerText = segundos;
  }

  actualizarContador();
  setInterval(actualizarContador, 1000); // Actualizar cada segundo
});

// Este script es necesario para la funcionalidad de la galería, como moverse entre imágenes y generar miniaturas.
// También se encarga de ampliar las imágenes al hacer clic en ellas.
// Puedes agregar tu lógica para el contador de tiempo aquí.

document.addEventListener('DOMContentLoaded', function() {
  const gallery = document.querySelector('.gallery');
  const images = document.querySelector('.images');
  const thumbnailsContainer = document.querySelector('.thumbnails');

  const leftArrow = document.querySelector('.arrow.left');
  const rightArrow = document.querySelector('.arrow.right');

  const imageNodes = document.querySelectorAll('.images img');

  const thumbnails = Array.from(imageNodes).map((image, index) => {
    const thumbnail = document.createElement('img');
    thumbnail.src = image.src;
    thumbnail.alt = `Thumbnail ${index + 1}`;
    thumbnail.addEventListener('click', () => {
      showImage(index);
    });
    thumbnailsContainer.appendChild(thumbnail);
    return thumbnail;
  });

  imageNodes.forEach(image => {
    image.addEventListener('click', () => {
      enlargeImage(image.src);
    });
  });

  leftArrow.addEventListener('click', scrollToPrev);
  rightArrow.addEventListener('click', scrollToNext);

  let currentIndex = 0;

  function scrollToImage(index) {
    images.scrollTo({
      left: index * images.offsetWidth,
      behavior: 'smooth'
    });
    currentIndex = index;
  }

  function scrollToPrev() {
    if (currentIndex > 0) {
      scrollToImage(currentIndex - 1);
    }
  }

  function scrollToNext() {
    if (currentIndex < imageNodes.length - 1) {
      scrollToImage(currentIndex + 1);
    }
  }

  function showImage(index) {
    images.scrollTo({
      left: index * images.offsetWidth,
      behavior: 'smooth'
    });
    currentIndex = index;
  }

  function enlargeImage(src) {
    const enlargedImage = document.createElement('div');
    enlargedImage.classList.add('enlarged-image');
    enlargedImage.style.backgroundImage = `url(${src})`;
    enlargedImage.addEventListener('click', () => {
      enlargedImage.remove();
    });
    document.body.appendChild(enlargedImage);
  }
});
