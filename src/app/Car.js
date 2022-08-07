(function (win, doc) {
  class Car {
    constructor(addCarController, removeCarController) {
      this.addCarController = addCarController;
      this.removeCarController = removeCarController;
    }

    add = () => {
      const car = this.addCarController.handle();
      const carElementButton = doc.querySelector(
        `#${car.plateNumber} .remove-car-button`
      );

      carElementButton.addEventListener("click", (e) => {
        e.preventDefault();

        this.removeCarController.handle(car.plateNumber);
      });
    };
  }

  win.Car = Car;
})(window, document);
