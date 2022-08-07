(function (win, doc) {
  class FormView {
    selectCar = () => ({
      brand: doc.querySelector("#brand").value,
      model: doc.querySelector("#model").value,
      year: doc.querySelector("#year").value,
      plateNumber: doc.querySelector("#plate-number").value,
      photo: doc.querySelector("#photo").value,
    });

    clearForm = () => {
      doc.querySelector("#brand").value = "";
      doc.querySelector("#model").value = "";
      doc.querySelector("#year").value = "";
      doc.querySelector("#plate-number").value = "";
      doc.querySelector("#photo").value = "";
    };
  }

  win.FormView = FormView;
})(window, document);
