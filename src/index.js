const data = [
    {
      id: 1,
      name: "Bertie Yates",
      age: 29,
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
    },
    {
      id: 2,
      name: "Hester Hogan",
      age: 32,
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg",
    },
    {
      id: 3,
      name: "Larry Little",
      age: 36,
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    },
    {
      id: 4,
      name: "Sean Walsh",
      age: 34,
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    },
    {
      id: 5,
      name: "Lola Gardner",
      age: 29,
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    },
  ];

  const container = document.getElementById("personContainer");

  function renderPeople() {
    container.innerHTML = "<h1>5 Birthdays Today...</h1>";
    data.forEach((person) => {
      const div = document.createElement("div");
      div.classList.add("person");
      div.innerHTML = `
      <img src="${person.image}" alt="${person.name}">
      <div class="person-details">
        <h2>${person.name}</h2>
        <p>Age: ${person.age}</p>
      </div>
    `;
      container.appendChild(div);
    });

    const clearButton = document.createElement("button");
    clearButton.classList.add("clear-button");
    clearButton.textContent = "Clear All";
    clearButton.addEventListener("click", clearAll);
    container.appendChild(clearButton);
  }

  function clearAll() {
    container.innerHTML =
      '<h1 style="text-align: center; width: 100%;"> De®ek was Here 🤓 </h1>';
  }

  renderPeople();