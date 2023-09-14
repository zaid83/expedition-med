fetch("Data/select", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then(function (response) {
    return response.json();
  })

  .then(function (data) {
    const ligneTriEl = document.querySelector(".mb-3");
    const selectSampleEl = document.createElement("select");
    selectSampleEl.name = "sample_1";
    selectSampleEl.classList.add("form-select");
    const samples = data.samples;
    samples.forEach((sample) => {
      const optionSample = document.createElement("option");
      optionSample.value = sample.Sample;
      optionSample.innerText = sample.Sample;
      selectSampleEl.appendChild(optionSample);
    });

    const typeLabel = document.createElement("label");
    typeLabel.textContent = "Type : ";
    typeLabel.setAttribute("for", "type-input");
    typeLabel.classList.add("form-label");

    const selectTypeEl = document.createElement("select");
    selectTypeEl.name = "type_1";
    selectTypeEl.classList.add("form-select");
    selectTypeEl.setAttribute("id", "type-input");
    const types = data.type;
    types.forEach((type) => {
      const optionType = document.createElement("option");
      optionType.value = type.Type;
      optionType.innerText = type.Type;
      selectTypeEl.appendChild(optionType);
    });

    const selectSizeEl = document.createElement("select");
    selectSizeEl.name = "size_1";
    selectSizeEl.classList.add("form-select");
    selectSizeEl.setAttribute("id", "size-input");
    const sizes = data.size;
    sizes.forEach((size) => {
      const optionSize = document.createElement("option");
      optionSize.value = size.Size;
      optionSize.innerText = size.Size;
      selectSizeEl.appendChild(optionSize);
    });

    const sizeLabel = document.createElement("label");
    sizeLabel.textContent = "Taille : ";
    sizeLabel.setAttribute("for", "size-input");
    sizeLabel.classList.add("form-label");

    const selectColorEl = document.createElement("select");
    selectColorEl.name = "color_1";
    selectColorEl.classList.add("form-select");
    selectColorEl.setAttribute("id", "color-input");
    const colors = data.color;
    colors.forEach((color) => {
      const optionColor = document.createElement("option");
      optionColor.value = color.Color;
      optionColor.innerText = color.Color;
      selectColorEl.appendChild(optionColor);
    });

    const colorLabel = document.createElement("label");
    colorLabel.textContent = "Color : ";
    colorLabel.setAttribute("for", "color-input");
    colorLabel.classList.add("form-label");

    const numberInput = document.createElement("input");
    numberInput.type = "number";
    numberInput.name = "number_1";
    numberInput.setAttribute("id", "number-input");
    numberInput.classList.add("form-control");
    numberInput.required = true;

    const numberLabel = document.createElement("label");
    numberLabel.textContent = "Number : ";
    numberLabel.setAttribute("for", "number-input");
    numberLabel.classList.add("form-label");

    ligneTriEl.appendChild(selectSampleEl);
    ligneTriEl.appendChild(sizeLabel);
    ligneTriEl.appendChild(selectSizeEl);
    ligneTriEl.appendChild(typeLabel);
    ligneTriEl.appendChild(selectTypeEl);
    ligneTriEl.appendChild(colorLabel);
    ligneTriEl.appendChild(selectColorEl);
    ligneTriEl.appendChild(numberLabel);
    ligneTriEl.appendChild(numberInput);

    let indexligne = 2;

    const ajoutBtn = document.querySelector(".ajout_ligne");

    ajoutBtn.addEventListener("click", () => {
      const ligneTri = document.createElement("div");
      ligneTri.classList.add("mb-3");

      const selectSampleEl = document.createElement("select");
      selectSampleEl.name = "sample_" + indexligne;
      selectSampleEl.classList.add("form-select");
      const samples = data.samples;
      samples.forEach((sample) => {
        const optionSample = document.createElement("option");
        optionSample.value = sample.Sample;
        optionSample.innerText = sample.Sample;
        selectSampleEl.appendChild(optionSample);
      });

      const typeLabel = document.createElement("label");
      typeLabel.textContent = "Type : ";
      typeLabel.setAttribute("for", "type-input");
      typeLabel.classList.add("form-label");

      const selectTypeEl = document.createElement("select");
      selectTypeEl.name = "type_" + indexligne;
      selectTypeEl.classList.add("form-select");
      selectTypeEl.setAttribute("id", "type-input");
      const types = data.type;
      types.forEach((type) => {
        const optionType = document.createElement("option");
        optionType.value = type.Type;
        optionType.innerText = type.Type;
        selectTypeEl.appendChild(optionType);
      });

      const selectSizeEl = document.createElement("select");
      selectSizeEl.name = "size_" + indexligne;
      selectSizeEl.classList.add("form-select");
      selectSizeEl.setAttribute("id", "size-input");
      const sizes = data.size;
      sizes.forEach((size) => {
        const optionSize = document.createElement("option");
        optionSize.value = size.Size;
        optionSize.innerText = size.Size;
        selectSizeEl.appendChild(optionSize);
      });

      const sizeLabel = document.createElement("label");
      sizeLabel.textContent = "Taille : ";
      sizeLabel.setAttribute("for", "size-input");
      sizeLabel.classList.add("form-label");

      const selectColorEl = document.createElement("select");
      selectColorEl.name = "color_" + indexligne;
      selectColorEl.classList.add("form-select");
      selectColorEl.setAttribute("id", "color-input");
      const colors = data.color;
      colors.forEach((color) => {
        const optionColor = document.createElement("option");
        optionColor.value = color.Color;
        optionColor.innerText = color.Color;
        selectColorEl.appendChild(optionColor);
      });

      const colorLabel = document.createElement("label");
      colorLabel.textContent = "Color : ";
      colorLabel.setAttribute("for", "color-input");
      colorLabel.classList.add("form-label");

      const numberInput = document.createElement("input");
      numberInput.type = "number";
      numberInput.name = "number_" + indexligne;
      numberInput.setAttribute("id", "number-input");
      numberInput.classList.add("form-control");
      numberInput.required = true;

      const numberLabel = document.createElement("label");
      numberLabel.textContent = "Number : ";
      numberLabel.setAttribute("for", "number-input");
      numberLabel.classList.add("form-label");

      ligneTriEl.appendChild(selectSampleEl);
      ligneTriEl.appendChild(sizeLabel);
      ligneTriEl.appendChild(selectSizeEl);
      ligneTriEl.appendChild(typeLabel);
      ligneTriEl.appendChild(selectTypeEl);
      ligneTriEl.appendChild(colorLabel);
      ligneTriEl.appendChild(selectColorEl);
      ligneTriEl.appendChild(numberLabel);
      ligneTriEl.appendChild(numberInput);

      const formulaire = document.querySelector("form");
      formulaire.insertBefore(ligneTri, ajoutBtn);

      indexligne++;
    });
  });
