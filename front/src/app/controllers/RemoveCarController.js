(function (win, doc) {
  class RemoveCarController {
    constructor(carModel, catalogView) {
      this.carModel = carModel;
      this.catalogView = catalogView;
    }

    handle = (plateNumber) => {
      return fetch(`http://localhost:3000/car/${plateNumber}`, {
        method: "DELETE",
      })
        .then((res) => res)
        .then((data) => {
          this.carModel.removeCar(plateNumber);
          this.catalogView.removeCarElement(plateNumber);
          return data;
        })
        .catch((err) => {
          throw err;
        });
    };
  }

  win.RemoveCarController = RemoveCarController;
})(window, document);
