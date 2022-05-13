(function (win, doc) {
  const addCarController = new win.AddCarController(
    new win.FormView(),
    new win.CarModel(),
    new win.CatalogView()
  );

  const button = doc.querySelector("#button");
  button.addEventListener("click", (e) => {
    e.preventDefault();

    addCarController.handle();
  });
})(window, document);
