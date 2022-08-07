(function (win, doc) {
  class CarView {
    createCarElement = (car) => `
    <div class="catalog-card" id=${car.plateNumber}>
      <img
        class="catalog-card-image"
        src="${car.photo}"
      />
      <div class="catalog-card-description">
        <p class="catalog-card-description-brand">Marca: ${car.brand}</p>
        <p class="catalog-card-description-model">Modelo: ${car.model}</p>
        <p class="catalog-card-description-year">Ano: ${car.year}</p>
        <p class="catalog-card-description-plate-number">Placa: ${car.plateNumber}</p>
      </div>
      <button class="remove-car-button">Remover</button>
    </div>
  `;
  }

  win.CarView = CarView;
})(window, document);
