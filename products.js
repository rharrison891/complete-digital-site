fetch('./products.json')
  .then(res => res.json())
  .then(products => {
    const container = document.querySelector('.products');
    products.forEach(p => {
      const card = document.createElement('a');
      card.className = 'product-card';
      card.href = '#'; // or link to details page
      card.innerHTML = `
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <div class="price">${p.price}</div>
      `;
      container.appendChild(card);
    });
  });
