
  const startButton = document.getElementById('start-button');
  const newScreen = document.getElementById('new-screen');
  const body = document.body;

  const buyButtonLeft = document.getElementById('buy-button-left');
  const buyNewScreen = document.getElementById('buy-new-screen');

  const buyButtonTop = document.getElementById('buy-button-top');
  const serviceButton = document.getElementById('service-button');

  startButton.addEventListener('click', function () {
    body.style.transition = 'transform 1s ease-in-out';
    body.style.transform = 'translateY(-100%)';

    setTimeout(function () {
      newScreen.classList.add('visible');
    }, 500);
  });

  // Кнопка "Машины для продажи"
  buyButtonLeft.addEventListener('click', function () {
    newScreen.classList.remove('visible');
    body.style.transition = 'transform 1s ease-in-out';
    body.style.transform = 'translateY(-100%)';
    setTimeout(function () {
      buyNewScreen.classList.add('visible');
    }, 5);
  });

 
  document.querySelector(".start-button").addEventListener("click", function () {
    document.querySelector(".square-left-container")?.classList.add("visible");
    document.querySelector(".square-right-container")?.classList.add("visible");
  });


  document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll(".square-fly");

    squares.forEach((square) => {
      const overlay = square.querySelector(".square-overlay");

      square.addEventListener("mouseenter", function () {
        overlay.classList.add("visible");
      });

      square.addEventListener("mouseleave", function () {
        if (!square.classList.contains("clicked")) {
          overlay.classList.remove("visible");
        }
      });

      square.addEventListener("click", function () {
        const url = square.getAttribute("data-url");
        square.classList.add("clicked");
        setTimeout(() => {
          window.location.href = url;
        }, 500);
      });
    });
  });

  // Переход на страницу автозапчастей
  buyButtonTop.addEventListener('click', function () {
    window.location.href = 'parts.html';
  });

  // Переход на страницу сервиса
  serviceButton.addEventListener('click', function () {
    window.location.href = 'service.html';
  });

