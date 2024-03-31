/* eslint-disable no-undef */
import ShowFullName from "./ShowFullName";

function Greeting(props) {

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

  return (
    <div>
      <ShowFullName {...props}/>
    </div>
  );
}

export default Greeting;
