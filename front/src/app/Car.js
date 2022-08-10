(function (win, doc) {
  class Car {
    constructor(addCarController, removeCarController, loadCarsController) {
      this.addCarController = addCarController;
      this.removeCarController = removeCarController;
      this.loadCarsController = loadCarsController;
    }

    addEventListener = (car) => {
      if (Array.isArray(car)) {
        const cars = car;

        cars.forEach(({ plateNumber }) => {
          const carElementButton = doc.querySelector(
            `#${plateNumber} .remove-car-button`
          );

          carElementButton.addEventListener("click", (e) => {
            e.preventDefault();

            this.remove(plateNumber);
          });
        });

        return;
      }

      const carElementButton = doc.querySelector(
        `#${car.plateNumber} .remove-car-button`
      );

      carElementButton.addEventListener("click", (e) => {
        e.preventDefault();

        this.removeCarController.handle(car.plateNumber);
      });
    };

    add = () => {
      this.addCarController
        .handle()
        .then((car) => {
          console.log("New car added:", car);
          this.load();
        })
        .catch((err) => {
          console.log("Error adding the car:", err);
        });
    };

    load = () => {
      this.loadCarsController
        .handle()
        .then((cars) => {
          this.addEventListener(cars);
          return cars;
        })
        .catch((err) => {
          console.log("Error loading the cars:", err);
        });
    };

    remove = (plateNumber) => {
      this.removeCarController
        .handle(plateNumber)
        .then((data) => {
          console.log("Car removed.", data);
          this.load();
        })
        .catch((err) => {
          console.log("Error removing the car:", err);
        });
    };
  }

  win.Car = Car;
})(window, document);
