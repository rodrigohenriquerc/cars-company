(function (win, doc) {
  class CatalogView {
    updateCatalog = (cars) => {
      doc.querySelector("#catalog").innerHTML = cars.reduce(
        (catalog, car) =>
          catalog +
          `
        <div class="catalog-card">
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
        </div>
      `,
        ""
      );
    };
  }

  win.CatalogView = CatalogView;
})(window, document);
