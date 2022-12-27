const productOptions = [
  {
    id: 1,
    src: '/assets/watch-1.png',
    price: '5.299',
  },
  {
    id: 2,
    src: '/assets/watch-2.png',
    price: '5.500',
  },
  {
    id: 3,
    src: '/assets/watch-3.png',
    price: '5.400',
  },
  {
    id: 4,
    color: '#000000',
    src: '/assets/watch-4.png',
    price: '5.500',
  },
];

function selectOption(option) {
  const appleWatchElement = document.getElementById('apple-watch');
  if (!appleWatchElement) return;

  appleWatchElement.style = 'animation: none;';
  appleWatchElement.src = option.src;

  setTimeout(() => {
    appleWatchElement.style = 'animation: transform-apple-watch 3s forwards';
  }, 10);

  const priceElement = document.getElementById('price');
  if (!priceElement) return;
  priceElement.innerHTML = `${option.price}$`;
}

function renderProductOptions() {
  const element = document.getElementById('color-picker');
  if (!element) return;

  productOptions.map(function (option) {
    const newDiv = document.createElement('div');
    const id = `color_picker_${option.id}`;

    newDiv.id = id;
    newDiv.onclick = () => this.selectOption(option);
    newDiv.className = 'color-picker-options';

    element.appendChild(newDiv);
  });
}

renderProductOptions();
