function Hello(p) {
  return (
    <span>
      {p.personObject.map((person) => (
        <>
          <h1> Hello! My name is {person.name} </h1>
          <p> I live in {person.address} </p>
          <ul>
            {person.bday.map((day, index) => 
            {
              const keys = day.concat(index);
              return (
                <li key={keys}> 
                  {day} 
                </li>
              );
            })}
          </ul>
        </>
      ))}
      <h1> Take your time </h1>
      <p> I love money! </p>
    </span>
  );
}

export default Hello;
