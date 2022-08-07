(function (win, doc) {
  class CatalogView {
    addCarElement = (carElement) => {
      doc.querySelector("#catalog").insertAdjacentHTML("beforeend", carElement);
    };

    removeCarElement = (plateNumber) => {
      const carElement = doc.querySelector(`#${plateNumber}`);
      doc.querySelector("#catalog").removeChild(carElement);
    };
  }

  win.CatalogView = CatalogView;
})(window, document);
