(function () {
  const petsContainer = document.querySelector(".pets__container");
  const petItem = document.querySelectorAll(".pets__item");
  const selectCategory = document.querySelector("#select-category");
  const btn = document.querySelectorAll(".nav__btn");

  const pets = [
    {
      name: "scotish",
      description:
        "Золотой шотландский вислоухий кот ждет в гости кошечку для совместного времяпровождения. Одной встречи достаточно для получения красивого и здорового потомства. У полуторагодовалого",
      location: "Київ, Київська область",
      price: "12 грн",
      url: "https://d1opu7v3g3cdvy.cloudfront.net/213x160/4ZN2o7krAB7SsGcJjX93.webp",
    },
    {
      name: "scotish",
      description:
        "Гарний ,охайний котик. Привчений до лотка,їсть сухий корм. Любить гратися. Котику майже 4 місяці.( В подарунок 2 лоточка для туалету.",
      location: "Київ, Київська область",
      price: "3 грн",
      url: "https://d1opu7v3g3cdvy.cloudfront.net/213x160/o4b5MCkz9QUV6sgVCPzV.webp",
    },
    {
      name: "another",
      description:
        "Все вопросы обсуждаются в телефонном разговоре, а не в переписке. Большая просьба звонить с 10 до 20 часов.Елка - глазастая, красивая и яркая, но колкая, если хочешь прикоснуться. Елка из тех",
      location: "Київ, Київська область",
      price: "1 грн",
      url: "https://d1opu7v3g3cdvy.cloudfront.net/213x160/jKmG4ZOy05MmybPcazEl.webp",
    },
    {
      name: "ekzotik",
      description:
        "Великолепный малыш Экзот, 2 месяца Лоток и когтеточку знает без проблем. Очень ласковый и нежная мальчик. Питание : сухой корм премиум класса и натуралка. Больше фото и видео вышлю в",
      location: "Київ, Київська область",
      price: "5000 грн",
      url: "https://d1opu7v3g3cdvy.cloudfront.net/213x160/WZ0RZ4x6GQ2VUENFTPrm.webp",
    },
    {
      name: "ekzotik",
      description:
        "Экзотический мальчик медвежульного типа) Упитанный и классный! С отличным костяком Чистокровный, обучен лотку Пишите в вайбер вышлю больше фото, видео",
      location: "Київ, Київська область",
      price: "1300 грн",
      url: "https://d1opu7v3g3cdvy.cloudfront.net/213x160/iV8s1E5lPpU7wdJIAO7K.webp",
    },
  ];

  renderPets(pets);

  function sortByPriceMin(pets) {
    const temp = JSON.parse(JSON.stringify(pets));
    temp.forEach((pet) => {
      pet.price = +pet.price.replace(/\D/g, ""); //залишає тільки цифри, може працювати і з 4 500 грн, де є пробіли, працює коректно!
    });
    temp.sort((a, b) => (a.price > b.price ? 1 : -1));
    petsContainer.innerHTML = "";
    renderPets(temp);
  }

  function sortByPriceMax(pets) {
    const temp = JSON.parse(JSON.stringify(pets));
    temp.forEach((pet) => {
      pet.price = +pet.price.replace(/\D/g, "");
    });
    temp.sort((a, b) => (a.price < b.price ? 1 : -1));
    petsContainer.innerHTML = "";
    renderPets(temp);
  }

  for (let i = 0; i < btn.length; i++) {
    btn[0].addEventListener("click", () => {
      sortByPriceMin(pets);
    });
    btn[1].addEventListener("click", () => {
      sortByPriceMax(pets);
    });
  }

  selectCategory.addEventListener("click", () => {
    if (selectCategory.value != "all") {
      petItem.innerHTML = "";
      let arr = pets.filter((pet) => pet.name === selectCategory.value);

      renderPets(arr);

      btn[0].addEventListener("click", () => {
        sortByPriceMin(arr);
      });
      btn[1].addEventListener("click", () => {
        sortByPriceMax(arr);
      });
    } else {
      renderPets(pets);

      btn[0].addEventListener("click", () => {
        sortByPriceMin(pets);
      });

      btn[1].addEventListener("click", () => {
        sortByPriceMax(pets);
      });
    }
  });

  //   selectCategory.onclick = () => {
  //     if (selectCategory.value != "all") {
  //       petItem.innerHTML = "";
  //       let arr = pets.filter((pet) => pet.name === selectCategory.value);

  //       renderPets(arr);

  //       btn[0].addEventListener("click", () => {
  //         sortByPriceMin(arr);
  //       });
  //       btn[1].addEventListener("click", () => {
  //         sortByPriceMax(arr);
  //       });
  //     } else {
  //       renderPets(pets);

  //       btn[0].addEventListener("click", () => {
  //         sortByPriceMin(pets);
  //       });

  //       btn[1].addEventListener("click", () => {
  //         sortByPriceMax(pets);
  //       });
  //     }
  //   };

  function renderPets(pets) {
    const temp = JSON.parse(JSON.stringify(pets));
    petsContainer.innerHTML = "";
    temp.forEach((pet) => {
      petsContainer.innerHTML += `
          <div class="pets__item">
          <h3 class="pets__name">${pet.name}</h3>
          <img class="pets__img" src="${pet.url}" alt="">
          <div class="pets__price">${pet.price} грн.</div>
          <p class="pets__description">${pet.description}</p>
          <h5 class="pets__loc">${pet.location}</h5>
          </div>
          `;
    });
  }
})();
