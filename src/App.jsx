import Hello from "./components/Hello";

function App() {
  const personObject = [
    {
      name: "Ace",
      address: "1335 Villa Silva",
      bday: ["money", "tree", "perfect"],
      soldout : false,
    },

    {
      name: "Raven",
      address: "1336 Villa Silva",
      bday: ["kendrick", "lamar", "goat"],
      soldout : true,
    },
  ];

  return (
    <div className="App">
      <Hello personObject={personObject} />
    </div>
  );
}

export default App;
