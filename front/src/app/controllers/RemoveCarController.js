(function (win, doc) {
  class RemoveCarController {
    constructor(carModel, catalogView) {
      this.carModel = carModel;
      this.catalogView = catalogView;
    }

    handle = (plateNumber) => {
      this.carModel.removeCar(plateNumber);
      this.catalogView.removeCarElement(plateNumber);
    };
  }

  win.RemoveCarController = RemoveCarController;
})(window, document);
