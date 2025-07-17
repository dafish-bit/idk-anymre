fetch('/products')
  .then(res => res.json())
  .then(images => {
    const container = document.querySelector('.products');
    container.innerHTML = '';
    images.forEach(file => {
      const div = document.createElement('div');
      div.className = 'product';
      div.innerHTML = `
        <img src="/products/${file}" alt="${file}">
        <p>${file}</p>
      `;
      container.appendChild(div);
    });
  });