(function (win, doc) {
  class CarModel {
    cars = [];

    addCar = (car) => {
      this.cars = [...this.cars, car];
      return car;
    };

    removeCar = (plateNumber) => {
      this.cars = this.cars.filter((car) => car.plateNumber !== plateNumber);
    };

    loadCars = (cars) => {
      this.cars = cars;
      return this.cars;
    };
  }

  win.CarModel = CarModel;
})(window, document);
