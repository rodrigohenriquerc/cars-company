(function (win, doc) {
  class AddCarController {
    constructor(formView, carModel, carView, catalogView) {
      this.formView = formView;
      this.carModel = carModel;
      this.carView = carView;
      this.catalogView = catalogView;
    }

    handle = () => {
      const car = this.formView.selectCar();
      this.carModel.addCar(car);
      const carElement = this.carView.createCarElement(car);
      this.catalogView.addCarElement(carElement);
      this.formView.clearForm();
      return car;
    };
  }

  win.AddCarController = AddCarController;
})(window, document);
