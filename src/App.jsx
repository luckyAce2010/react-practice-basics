import Hello from "./components/Hello";

function App() {
  const seatNumbers = [1, 2, 3];
  const personObject = [
    {
      name: "Ace",
      address: "1335 Villa Silva",
      bday: ["money", "tree", "perfect"],
    },

    {
      name: "Raven",
      address: "1336 Villa Silva",
      bday: ["kendrick", "lamar", "goat"],
    },
  ];

  return (
    <div className="App">
      <Hello personObject={personObject} />
    </div>
  );
}

export default App;
