(function (win, doc) {
  class AddCarController {
    constructor(formView, carModel, catalogView) {
      this.formView = formView;
      this.carModel = carModel;
      this.catalogView = catalogView;
    }

    handle = () => {
      const car = this.formView.selectCar();
      const allCars = this.carModel.addCar(car);
      this.catalogView.updateCatalog(allCars);
      this.formView.clearForm();
    };
  }

  win.AddCarController = AddCarController;
})(window, document);
