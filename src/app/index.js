(function (win, doc) {
  const formView = new win.FormView();
  const carModel = new win.CarModel();
  const carView = new win.CarView();
  const catalogView = new win.CatalogView();

  const addCarController = new win.AddCarController(
    formView,
    carModel,
    carView,
    catalogView
  );

  const removeCarController = new win.RemoveCarController(
    carModel,
    catalogView
  );

  const car = new win.Car(addCarController, removeCarController);

  const button = doc.querySelector("#button");

  button.addEventListener("click", (e) => {
    e.preventDefault();

    car.add();
  });
})(window, document);
