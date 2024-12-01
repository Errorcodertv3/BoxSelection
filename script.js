// Function to handle the selection of different boxes
function selectBox (boxNumber) {
  // Reset all boxes to the original state
  for (let i = 1; i <= 3; i++) {
    const box = document.getElementById ('box' + i); // Get box element by id
    const radio = document.querySelector (`#unit${i}`); // Get radio button for the box
    const priceElement = document.getElementById (`price${i}`); // Get price element
    box.classList.remove ('selected'); // Remove 'selected' class from all boxes
    radio.checked = false; // Uncheck all radio buttons
    priceElement.style.display = 'block'; // Show price again when unhovered
  }

  // Select the hovered box
  const selectedBox = document.getElementById ('box' + boxNumber); // Get selected box element
  const selectedRadio = document.querySelector (`#unit${boxNumber}`); // Get radio button for the selected box
  const selectedPrice = document.getElementById (`price${boxNumber}`); // Get price element for the selected box
  const dropdown1 = document.getElementById (`dropdown1`); // Get dropdown1
  const dropdown2 = document.getElementById (`dropdown2`); // Get dropdown2
  const dropdown3 = document.getElementById (`dropdown3`); // Get dropdown3

  // Mark the selected box and update the UI
  selectedBox.classList.add ('selected'); // Add 'selected' class to the chosen box
  selectedRadio.checked = true; // Check the radio button for the selected box
  selectedPrice.style.display = 'none'; // Hide the price when the box is selected

  // Get the price data from the selected box
  const boxPrice = selectedBox
    .querySelector ('.current-price')
    .getAttribute ('data-price'); // Retrieve price data attribute from the selected box
  const totalPrice = document.getElementById ('total-price'); // Get the total price element
  totalPrice.textContent = `$${parseFloat (boxPrice).toFixed (2)} USD`; // Update the total price display with the selected box's price

  // Control dropdown visibility based on the selected box
  if (boxNumber == 1) {
    // Hide other dropdowns and display dropdown1
    dropdown2.style.display = 'none';
    dropdown3.style.display = 'none';
    dropdown1.style.display = 'flex';
    dropdown1.style.flexDirection = 'column'; // Set flex direction to column
    dropdown1.style.gap = '0.5rem'; // Add a gap of 0.5rem between elements in dropdown1
  }

  if (boxNumber == 2) {
    // Hide other dropdowns and display dropdown2
    dropdown1.style.display = 'none';
    dropdown3.style.display = 'none';
    dropdown2.style.display = 'flex';
    dropdown2.style.flexDirection = 'column'; // Set flex direction to column
    dropdown2.style.gap = '0.5rem'; // Add a gap of 0.5rem between elements in dropdown2
  }

  if (boxNumber == 3) {
    // Hide other dropdowns and display dropdown3
    dropdown1.style.display = 'none';
    dropdown2.style.display = 'none';
    dropdown3.style.display = 'flex';
    dropdown3.style.flexDirection = 'column'; // Set flex direction to column
    dropdown3.style.gap = '0.5rem'; // Add a gap of 0.5rem between elements in dropdown3
  }
}
