import { Fragment } from "react";

function Greeting({ lastName, children, firstName }) {
  return <Fragment>
  {children}
  <h3>{firstName} {lastName}</h3>
  </Fragment>;
}

export default Greeting;



 







// Notes

// This destructuring is called parameter destructuring

// This above setting a prop with a value is called default props

//   const firstName = props.firstName;
//   const lastName = props.lastName;
//   const { firstName, lastName } = props;

// Cannot assign like this as this are only read-only properties
//   props.firstName = "zzz";
//   props.lastName="yyy"

// But after Destructing we can assign
//   firstName = "xxx"; // This are default props
//   lastName = "yyy"; // This is assigning default props
