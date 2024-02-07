// Карточка продукта
class Product {
  constructor({ id, name, description, price, imageUrl }, onclickHandler) {
    this.id = id,
    this.name = name,
    this.description = description,
    this.price = price,
    this.imageUrl = imageUrl,
    this.onclickHandler = onclickHandler
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
    product.addEventListener('click', () => this.onclickHandler(this.id));
    return product;
  }
}

export { Product }