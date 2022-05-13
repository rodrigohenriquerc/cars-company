(function (win, doc) {
  class CarModel {
    cars = [];

    addCar = (car) => {
      this.cars.push(car);
      return this.cars;
    };
  }

  win.CarModel = CarModel;
})(window, document);
