import { Fragment } from "react";
import Person from "./Person";

function Hello(p) {
  return (
    <span>
      {p.personObject.map((person) => (
        <Fragment key={person.name}>
          <h1> Hello! My name is {person.name} </h1>
          <p> I live in {person.address} </p>
          <ul>
            {person.bday.map((day) => 
              <Person key={day} day={day} soldout={person.soldout}/>
            )}
          </ul>
        </Fragment>
      ))}
      <h1> Take your time </h1>
      <p> I love money! </p>
    </span>
  );
}

export default Hello;
