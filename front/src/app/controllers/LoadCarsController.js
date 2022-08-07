(function (win, doc) {
  class LoadCarsController {
    constructor(carModel, carView, catalogView) {
      this.carModel = carModel;
      this.carView = carView;
      this.catalogView = catalogView;
    }

    handle = () =>
      fetch("http://localhost:3000/car")
        .then((res) => res.json())
        .then((data) => {
          const cars = this.carModel.loadCars(data);
          const carsElements = cars.reduce((initialCarsElements, car) => {
            const carElement = this.carView.createCarElement(car);
            return initialCarsElements + carElement;
          }, "");
          this.catalogView.loadCarsCatalogElement(carsElements);
          return cars;
        })
        .catch((err) => {
          throw err;
        });
  }

  win.LoadCarsController = LoadCarsController;
})(window, document);
