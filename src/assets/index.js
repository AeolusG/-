const descriptionForSaleProducts = {
  ring: {
    1: 'Стильное кольцо из белого золота c бриллиантами.',
    2: 'Платина практически всегда чиста на 95 процентов.',
    3: 'Серебро – бело-серый металл, очень мягкий и легко подверженный повреждениям, поэтому обычно он стоит недорого.',
    4: 'Титан обладает естественным серым покрытием, но иногда его полируют до черного цвета.',
  },
  earring: {
    1: 'Конго - это классическая форма серег, универсальная. ',
    2: 'Эти модели как нельзя лучше способны подчеркнуть женственность их обладательницы.',
    3: 'Из-за отсутствия каких-либо вставок, такие ювелирные изделия обладают совершенством формы и безупречным цветовым сочетанием.',
    4: 'И не важно выберете вы золотые ювелирные серьги-пуссеты, конго или цепочки, вы в любом случае будете на высоте.',
  },
  bracelet: {
    1: 'Отличный подарок для тех, кто не упустит возможность быть счастливым каждый день!',
    2: 'Браслет относится к модели унисекс.',
    3: 'Альтернативная основа для создания уникального браслета - браслет-цепь.',
    4: 'Благодаря своему лаконичному дизайну его можно носить как самостоятельное украшение.',
  },
  watch: {
    1: 'Стильное кольцо из белого золота c бриллиантами',
    2: 'Стильное кольцо из белого золота c бриллиантами',
    3: 'Стильное кольцо из белого золота c бриллиантами',
    4: 'Стильное кольцо из белого золота c бриллиантами',
  },
};

function switchActiveElements(classForItems, classForActive) {
  const switchers = document.querySelectorAll(`.${classForItems}`);
  switchers.forEach((item) => {
    item.addEventListener('click', function () {
      if (document.querySelector(`.${classForActive}`)) {
        document
          .querySelector(`.${classForActive}`)
          .classList.remove(`${classForActive}`);
      }
      item.classList.add(`${classForActive}`);
    });
  });
}
function switchImagesAndText(id) {
  let i = 1;
  productsForSale.forEach((item) => {
    item.querySelector('.sale-description').innerHTML =
      descriptionForSaleProducts[id][`${i}`];
    item.querySelector('img').setAttribute('src', `./images/${id}${i}.png`);
    i++;
  });
}

function changeCity(img) {
  img.setAttribute('src', './images/check.svg');
  img.setAttribute('alt', 'check');

  const defaultCity = dropdownList.querySelector('li:first-child');
  defaultCity.append(img);

  dropdownSelect.addEventListener('click', () => {
    dropdownList.classList.toggle('dropdown-list-hidden');
    dropdownSelect.classList.toggle('dropdown-select-caret');
  });
  options.forEach((item) => {
    item.addEventListener('click', () => {
      item.append(img);
      cityName.innerText = item.innerText;
    });
  });
}
function switchButtonsForSale(buttonsForSale) {
  buttonsForSale.forEach((item) => {
    item.addEventListener('click', function () {
      switchImagesAndText(item.getAttribute('id'));
    });
  });
}
var currentTime = new Date();
var deadlineTime = currentTime.setHours(currentTime.getHours() + 12);
var countdown = setInterval(function () {
  var now = new Date().getTime();
  var timeRemain = deadlineTime - now;
  var hoursRemain = Math.floor(
    (timeRemain % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutesRemain = Math.floor((timeRemain % (1000 * 60 * 60)) / (1000 * 60));
  var secondsRemain = Math.floor((timeRemain % (1000 * 60)) / 1000);

  hoursRemain = hoursRemain < 10 ? '0' + hoursRemain : hoursRemain;
  minutesRemain = minutesRemain < 10 ? '0' + minutesRemain : minutesRemain;
  secondsRemain = secondsRemain < 10 ? '0' + secondsRemain : secondsRemain;

  document.getElementById('hours').innerHTML = hoursRemain;
  document.getElementById('minutes').innerHTML = minutesRemain;
  document.getElementById('seconds').innerHTML = secondsRemain;
}, 1000);
