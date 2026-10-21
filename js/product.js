// Данные товаров. Ключ — id из адреса страницы: product.html?id=ps5
const products = {
  ps5: {
    title: 'Консоль Sony PlayStation 5 Slim 825GB',
    shortTitle: 'Консоль Sony PlayStation 5',
    image: 'images/product-1.webp',
    imageWidth: 600,
    imageHeight: 800,
    rating: 'Оценка: 5.0★ (5 отзывов)',
    price: '84999 руб.',
    description: 'PlayStation 5 Slim Digital Edition — это обновлённая версия популярной консоли, которая стала легче предшественницы на 100 граммов благодаря уменьшенным компонентам и новому матовому покрытию. Модель оснащена сверхбыстрым SSD на 825 ГБ (пользователю доступно около 667 ГБ, остальное занимает система). Консоль поддерживает игры в разрешении до 8K Ultra HD, технологии HDR и тактильную отдачу контроллера DualSense, а скорость чтения SSD достигает 5500 МБ/с, что обеспечивает мгновенную загрузку. Важно отметить: это цифровая версия без дисковода, поэтому игры приобретаются и загружаются через PlayStation Store. Наличие портов включает USB Type-A 3.0, HDMI и Gigabit Ethernet.',
    specs: [
      ['Категория', 'Развлечения'],
      ['Встроенный Wi-Fi модуль', 'Есть'],
      ['Выход HDMI', '1 шт.'],
      ['Объём SSD', '825 ГБ'],
      ['Материал корпуса', 'Пластик'],
      ['Вес', '3.2 кг'],
    ],
  },
  laptop: {
    title: 'Ноутбук Redmi Book 14 2024 i5-13420H/16GB+1TB',
    shortTitle: 'Ноутбук Redmi Book 14',
    image: 'images/product-2.webp',
    imageWidth: 620,
    imageHeight: 620,
    rating: 'Оценка: 4.8★ (12 отзывов)',
    price: '75999 руб.',
    description: 'Redmi Book 14 2024 — лёгкий ноутбук для учёбы и работы в металлическом корпусе. Процессор Intel Core i5-13420H и 16 ГБ оперативной памяти уверенно справляются с браузером, офисными программами и несложным монтажом, а SSD на 1 ТБ вмещает проекты, фото и игры. Экран 14″ с разрешением 2.8K и частотой 120 Гц даёт чёткую и плавную картинку, а аккумулятор позволяет работать вдали от розетки большую часть дня.',
    specs: [
      ['Категория', 'Ноутбуки'],
      ['Процессор', 'Intel Core i5-13420H'],
      ['Оперативная память', '16 ГБ'],
      ['Объём SSD', '1 ТБ'],
      ['Экран', '14″, 2880×1800, 120 Гц'],
      ['Вес', '1.4 кг'],
    ],
  },
  airpods: {
    title: 'Наушники беспроводные Apple AirPods Pro 3',
    shortTitle: 'Наушники Apple AirPods Pro 3',
    image: 'images/product-3.jpg',
    imageWidth: 870,
    imageHeight: 870,
    rating: 'Оценка: 4.9★ (8 отзывов)',
    price: '34990 руб.',
    description: 'AirPods Pro 3 — беспроводные наушники-вкладыши с улучшенным активным шумоподавлением, которое заглушает шум транспорта и офиса, и режимом прозрачности для разговоров без снятия наушников. Встроенный датчик пульса позволяет следить за нагрузкой во время тренировок, а защита IP57 не боится пота и дождя. Наушники работают до 8 часов без подзарядки, а зарядный кейс продлевает автономность ещё на несколько циклов.',
    specs: [
      ['Категория', 'Аудио'],
      ['Тип', 'TWS-наушники'],
      ['Шумоподавление', 'Активное (ANC)'],
      ['Датчик пульса', 'Есть'],
      ['Защита', 'IP57'],
      ['Время работы', 'до 8 часов'],
    ],
  },
};

// Берём id товара из адреса. Если id нет или он неизвестен — показываем консоль.
const productId = new URLSearchParams(window.location.search).get('id');
const product = products[productId] || products.ps5;

document.title = `${product.title} — Учебный интернет-магазин`;

document.querySelector('.breadcrumbs__current').textContent = product.shortTitle;
document.querySelector('.product-details__title').textContent = product.title;
document.querySelector('.product-details__rating').textContent = product.rating;
document.querySelector('.product-details__price').textContent = product.price;
document.getElementById('product-description').textContent = product.description;

const productImage = document.querySelector('.product-details__image');
productImage.src = product.image;
productImage.alt = product.title;
productImage.width = product.imageWidth;
productImage.height = product.imageHeight;

// Название товара попадает в скрытое поле формы заявки (см. main.js).
document.querySelector('.product-details__actions .product-card__button').dataset.product = product.title;

// Перерисовываем таблицу характеристик.
const specsBody = document.getElementById('product-specs');
specsBody.innerHTML = '';

product.specs.forEach(([name, value]) => {
  const row = document.createElement('tr');
  row.className = 'product-table__row';

  [name, value].forEach((text) => {
    const cell = document.createElement('td');
    cell.className = 'product-table__cell';
    cell.textContent = text;
    row.append(cell);
  });

  specsBody.append(row);
});
