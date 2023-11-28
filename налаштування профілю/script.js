function addVehicle() {
    const vehiclesDiv = document.getElementById('vehicles');
  
    const vehicleBrandInput = createInput('Марка транспортного засобу', 'vehicleBrand', true);
    const vehicleTypeInput = createInput('Тип транспортного засобу', 'vehicleType', true);
    const vehicleNumberInput = createInput('Номер транспортного засобу', 'vehicleNumber', true);
  
    vehiclesDiv.appendChild(vehicleBrandInput);
    vehiclesDiv.appendChild(vehicleTypeInput);
    vehiclesDiv.appendChild(vehicleNumberInput);
  }
  
  function createInput(labelText, inputId, isRequired) {
    const container = document.createElement('div');
    container.classList.add('form-group');
  
    const label = document.createElement('label');
    label.innerText = labelText;
    label.setAttribute('for', inputId);
  
    const input = document.createElement('input');
    input.type = 'text';
    input.id = inputId;
    input.name = inputId;
    input.placeholder = `Введіть ${labelText.toLowerCase()}`;
    if (isRequired) {
      input.required = true;
    }
  
    container.appendChild(label);
    container.appendChild(input);
  
    return container;
  }
  