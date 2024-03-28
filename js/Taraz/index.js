document.addEventListener("DOMContentLoaded", function () {
  // Загрузка информации о местах для посещения (замените на реальные данные)
  const placesList = document.getElementById("placesList");
  const placesData = [
    "Парк им. Жамбыла",
    "Музей истории Тараза",
    "Крепость Арканташ",
    "Парк культуры и отдыха",
  ];
  placesData.forEach((place) => {
    const li = document.createElement("li");
    li.textContent = place;
    placesList.appendChild(li);
  });

  // Загрузка погоды
  const weatherData = document.getElementById("weatherData");
  const apiKey = "YOUR_API_KEY"; // Замените YOUR_API_KEY на ваш API ключ погоды
  const city = "Taraz"; // Название города

  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=ru&units=metric"
  )
    .then((response) => response.json())
    .then((data) => {
      const weatherDescription = data.weather[0].description;
      const temperature = data.main.temp;
      const feelsLike = data.main.feels_like;
      const humidity = data.main.humidity;

      const weatherHTML = `
        <p>Сейчас: ${weatherDescription}</p>
        <p>Температура: ${temperature}°C</p>
        <p>Ощущается как: ${feelsLike}°C</p>
        <p>Влажность: ${humidity}%</p>
      `;
      weatherData.innerHTML = weatherHTML;
    })
    .catch((error) => {
      console.error("Ошибка при получении данных о погоде:", error);
      weatherData.innerHTML = "<p>Невозможно получить данные о погоде.</p>";
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const showOptionsBtn = document.getElementById("showOptionsBtn");
  const options = document.getElementById("options");

  showOptionsBtn.addEventListener("click", function () {
    if (options.style.display === "none") {
      options.style.display = "block";
    } else {
      options.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const languageSelect = document.getElementById("languageSelect");

  languageSelect.addEventListener("change", function () {
    const selectedLanguage = languageSelect.value;
    translatePage(selectedLanguage);
  });

  function translatePage(language) {
    const elementsToTranslate = document.querySelectorAll("[data-lang]");

    elementsToTranslate.forEach((element) => {
      const key = element.dataset.lang;
      if (translations[key] && translations[key][language]) {
        element.textContent = translations[key][language];
      }
    });
  }

  const translations = {
    welcomeText: {
      en: "Welcome to Taraz!",
      kk: "Таразға қош келдіңіз!",
    },
    aboutText: {
      en: "About Taraz",
      kk: "Тараз туралы",
    },
    // Добавьте другие переводы здесь
  };

  // Изначальный перевод страницы на русский
  translatePage("ru");
});
