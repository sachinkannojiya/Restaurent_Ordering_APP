document.getElementById("my-form").addEventListener("submit", addUser);

async function addUser(e) {
  e.preventDefault();

  const name = e.target.name.value;
  const price = e.target.price.value;

  if (name !== "" && price !== "") {
    let user = {
      name,
      price,
    };

    try {
      const response = await axios.post(
        "https://crudcrud.com/api/a6c47c1ed1574956ad716c0b289e18af/appoinmentData",
        user
      );

      console.log(response.data);
      showUsers();
    } catch (err) {
      console.log(err);
    }
  } else {
    document.getElementById("my-form").reset();
  }
}

const showUsers = async () => {
  const userList = document.getElementById("users");
  userList.innerHTML = "";

  try {
    const response = await axios.get(
      "https://crudcrud.com/api/a6c47c1ed1574956ad716c0b289e18af/appoinmentData"
    );

    response.data.forEach((userData) => {
      userList.innerHTML += `
        <li>
          ${userData.name} : ${userData.price} 
          <input type="button" class="editButton deleteBtn" value="Delete" onclick="deleteUser('${userData._id}')">
        </li>`;
    });
  } catch (err) {
    console.log(err);
  }
};

const editUser = async (_id, name, price) => {
  try {
    const response = await axios.put(
      `https://crudcrud.com/api/a6c47c1ed1574956ad716c0b289e18af/appoinmentData/${_id}`,
      {
        name: document.getElementById("name").value = name,
        price: document.getElementById("price").value = price,
      }
    );

    showUsers();
    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
};

const deleteUser = async (_id) => {
  try {
    const response = await axios.delete(
      `https://crudcrud.com/api/a6c47c1ed1574956ad716c0b289e18af/appoinmentData/${_id}`
    );

    showUsers();
    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
};

showUsers();
