let filteredProducts = [...products];

const productsContainer = document.querySelector('.products-container');

const displayProducts = () => {
  // if statement
  if (filteredProducts.length < 1) {
    productsContainer.inner = `
      <h6>관련 상품이 없습니다.</h6>
    `;
    return;
  }
  productsContainer.innerHTML = filteredProducts
    .map((products) => {
      const { id, title, image, price } = products;
      return `
      <article class="product">
        <img
          src=${image}
          class="product-img img"
        />
        <footer>
          <h5 class="product-name">${title}</h5>
          <span class="product-price">$${price}</span>
        </footer>
      </article>
      `;
    })
    .join('');
};

displayProducts();

// 검색창 filter
const form = document.querySelector('.input-form');
const searchInput = document.querySelector('.search-input');

form.addEventListener('keyup', () => {
  const inputValue = searchInput.value;
  filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(inputValue);
  });
  displayProducts();
});

// 버튼 filter

const companiesDOM = document.querySelector('.companies');

const displayButtons = () => {
  const buttons = [
    'all',
    ...new Set(products.map((product) => product.company)),
  ];
  companiesDOM.innerHTML = buttons
    .map((company) => {
      return `
        <button class="company-btn" data-id="${company}">${company}</button>
    `;
    })
    .join('');
};

displayButtons();

// company 버튼에 따른 필터링
companiesDOM.addEventListener('click', (e) => {
  const element = e.target;
  if (element.classList.contains('company-btn')) {
    if (element.dataset.id === 'all') {
      filteredProducts = [...products];
    } else {
      filteredProducts = products.filter((product) => {
        return product.company === element.dataset.id;
      });
    }
    searchInput.value = '';
    displayProducts();
  }
});
