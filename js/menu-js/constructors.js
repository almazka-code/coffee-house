// Карточка продукта
class Product {
  constructor({ id, name, description, price, imageUrl }) {
    this.id = id,
    this.name = name,
    this.description = description,
    this.price = price,
    this.imageUrl = imageUrl
  }

  createProduct() {
    const product = document.createElement('li');
    product.setAttribute('data-id', this.id);
    product.className = 'card';

    const innerHtml = `
      <article class="card__article">
        <div class="card__top">
          <img class="card__image" src="${this.imageUrl}" alt="${this.name}">
        </div>
        <div class="card__bottom">
          <div>
            <h3 class="card__title small-title">${this.name}</h3>
            <p class="card__text">${this.description}</p>
          </div>
          <p class="card__price small-title">$${this.price}</p>
        </div>
      </article>
    `;

    product.innerHTML = innerHtml;
    return product;
  }
}

export { Product }