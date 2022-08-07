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

      return fetch("http://localhost:3000/car", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(car),
      })
        .then((res) => res.json())
        .then((data) => {
          this.formView.clearForm();
          return data;
        })
        .catch((err) => {
          throw err;
        });
    };
  }

  win.AddCarController = AddCarController;
})(window, document);
