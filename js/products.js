// Белый список товаров: параметры URL не вставляются в HTML.
const products = {
  mouse: {
    name: 'Беспроводная мышь', price: '1000 руб.', category: 'Периферия',
    description: 'Тихие кнопки, три режима чувствительности и USB-приёмник для ноутбука.',
    badge: 'Новинка', color: 'bg-success'
  },
  keyboard: {
    name: 'Компактная клавиатура', price: '1500 руб.', category: 'Периферия',
    description: 'Проводная клавиатура с русской раскладкой и компактным корпусом.',
    badge: 'Хит', color: 'bg-warning text-dark'
  },
  headphones: {
    name: 'Наушники с микрофоном', price: '2000 руб.', category: 'Аудио',
    description: 'Полноразмерная гарнитура для занятий, звонков и любимой музыки.',
    badge: 'Скидка', color: 'bg-danger'
  }
};
const requested = new URLSearchParams(location.search).get('product');
const selected = Object.hasOwn(products, requested) ? requested : 'mouse';
const product = products[selected];
const setText = (id, text) => {
  const element = document.getElementById(id);
  if (element) element.textContent = text;
};
if (document.getElementById('product-title')) {
  setText('product-title', product.name);
  setText('product-breadcrumb', product.name);
  setText('product-description', product.description);
  setText('product-price', product.price);
  setText('product-table-price', product.price);
  setText('product-category', product.category);
  setText('product-badge', product.badge);
  document.getElementById('product-badge').className = `badge ${product.color} mb-3`;
  document.getElementById('product-order').href = `order.html?product=${selected}`;
  document.title = `${product.name} — ShopProject`;
}
const select = document.getElementById('order-product');
if (select && Object.hasOwn(products, requested)) {
  // Сброс возвращает выбранный по ссылке товар.
  select.querySelector('option[selected]').removeAttribute('selected');
  select.querySelector(`option[value="${selected}"]`).defaultSelected = true;
  select.value = selected;
}
const modal = document.getElementById('orderModal');
modal?.addEventListener('show.bs.modal', (event) => {
  const key = event.relatedTarget?.dataset.product;
  const item = Object.hasOwn(products, key) ? products[key] : products.mouse;
  document.getElementById('quick-order').reset();
  setText('quick-product', `${item.name} — ${item.price}`);
});
