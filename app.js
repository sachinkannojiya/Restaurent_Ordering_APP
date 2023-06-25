
// // Add JavaScript code here
// document.getElementById('menu-form').addEventListener('submit', function(event) {
//   event.preventDefault();

//   // Get input values
//   var dishName = document.getElementById('dish-name').value;
//   var dishPrice = document.getElementById('dish-price').value;
//   var tableNumber = document.getElementById('table-number').value;

//   // Create new table row
//   var newRow = document.createElement('tr');
//   newRow.innerHTML = `
//     <td>${dishName}</td>
//     <td>${dishPrice}</td>
//     <td>
//       <button onclick="deleteOrder(this)">Delete</button>
//     </td>
//   `;

//   // Append the new row to the corresponding table
//   var billTable = document.getElementById('table-' + tableNumber);
//   billTable.appendChild(newRow);

//   // Reset the form
//   document.getElementById('dish-name').value = '';
//   document.getElementById('dish-price').value = '';
//   document.getElementById('table-number').value = '';
// });

// function deleteOrder(button) {
//   // Get the parent row and remove it
//   var row = button.parentNode.parentNode;
//   row.parentNode.removeChild(row);
// }


// Import Axios library
// import axios from 'axios';

// // Define the base URL for the API
// const BASE_URL = 'https://crudcrud.com/api/4eac9ffbdeb74c60beba59e835f1b727';

// document.getElementById('menu-form').addEventListener('submit', function(event) {
//   event.preventDefault();

//   // Get input values
//   var dishName = document.getElementById('dish-name').value;
//   var dishPrice = document.getElementById('dish-price').value;
//   var tableNumber = document.getElementById('table-number').value;

//   // Create new table row
//   var newRow = document.createElement('tr');
//   newRow.innerHTML = `
//     <td>${dishName}</td>
//     <td>${dishPrice}</td>
//     <td>
//       <button onclick="deleteOrder(this)">Delete</button>
//     </td>
//   `;

//   // Append the new row to the corresponding table
//   var billTable = document.getElementById('table-' + tableNumber);
//   billTable.appendChild(newRow);

//   // Reset the form
//   document.getElementById('dish-name').value = '';
//   document.getElementById('dish-price').value = '';
//   document.getElementById('table-number').value = '';

//   // Prepare data object for POST request
//   var data = {
//     dishName: dishName,
//     dishPrice: dishPrice,
//     tableNumber: tableNumber
//   };

//   // Send data to the backend API using POST request
//   axios.post(`${BASE_URL}/userdata`, data)
//     .then(response => {
//       console.log('Data sent successfully:', response.data);
//     })
//     .catch(error => {
//       console.error('Error sending data:', error);
//     });
// });

// function deleteOrder(button) {
//   // Get the parent row and remove it
//   var row = button.parentNode.parentNode;
//   row.parentNode.removeChild(row);

//   // Get the dish name and table number from the deleted row
//   var dishName = row.cells[0].innerText;
//   var tableNumber = row.parentNode.parentNode.id.replace('table-', '');

//   // Prepare data object for DELETE request
//   var data = {
//     dishName: dishName,
//     tableNumber: tableNumber
//   };

//   // Send data to the backend API using DELETE request
//   axios.delete(`${BASE_URL}/userdata`, { data: data })
//     .then(response => {
//       console.log('Data deleted successfully:', response.data);
//     })
//     .catch(error => {
//       console.error('Error deleting data:', error);
//     });
// }





document.getElementById('menu-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get input values
    var dishName = document.getElementById('dish-name').value;
    var dishPrice = document.getElementById('dish-price').value;
    var tableNumber = document.getElementById('table-number').value;
  
    // Create new table row
    var newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${dishName}</td>
      <td>${dishPrice}</td>
      <td>
        <button onclick="deleteOrder(this)">Delete</button>
      </td>
    `;
  
    // Append the new row to the corresponding table
    var billTable = document.getElementById('table-' + tableNumber);
    billTable.appendChild(newRow);
  
    // Reset the form
    document.getElementById('dish-name').value = '';
    document.getElementById('dish-price').value = '';
    document.getElementById('table-number').value = '';
  
    // Create an object with the data to be sent
    var data = {
      dishName: dishName,
      dishPrice: dishPrice,
      tableNumber: tableNumber
    };
  
    // Make a POST request using Axios
    axios.post('https://crudcrud.com/api/4eac9ffbdeb74c60beba59e835f1b727/appoinmentData', data)
      .then(function(response) {
        console.log(response.data); // Handle the response from the backend
      })
      .catch(function(error) {
        console.error(error); // Handle any errors that occurred during the request
      });
  });
  
  function deleteOrder(button) {
    var row = button.parentNode.parentNode;
  
  // Get the dish name from the first column of the row
  var dishName = row.firstChild.textContent;

  // Make a DELETE request using Axios
  axios.delete('https://crudcrud.com/api/4eac9ffbdeb74c60beba59e835f1b727/userdata', {
    data: { dishName: dishName }
  })
    .then(function(response) {
      console.log(response.data); // Handle the response from the backend

      // Remove the row from the table
      row.parentNode.removeChild(row);
    })
    .catch(function(error) {
      console.error(error); // Handle any errors that occurred during the request
    });
  }
  
  