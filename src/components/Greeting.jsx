function Greeting({ firstName, lastName, userInfo }) {// This destructuring is called parameter destructuring
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
      <h1>
        Hello {firstName} {lastName} {userInfo.hobby} {userInfo.age}
      </h1>
    </div>
  );
}

export default Greeting;
