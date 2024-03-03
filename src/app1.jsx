import React from 'react';

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

class App extends React.Component {
  clearAll = () => {
    this.setState({ data: [] });
  };

  render() {
    return (
      <div className="container" id="personContainer">
        <h1>5 Birthdays Today</h1>
        {data.map((person) => (
          <div className="person" key={person.id}>
            <img src={person.image} alt={person.name} />
            <div className="person-details">
              <h2>{person.name}</h2>
              <p>Age: {person.age}</p>
            </div>
          </div>
        ))}
        <button className="clear-button" onClick={this.clearAll}>
          Clear All
        </button>
      </div>
    );
  }
}

export default App;
