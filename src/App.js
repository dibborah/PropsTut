import Greeting from "./components/Greeting";

// const Users = ['user1', 'user2']
const User = { hobby: "bikes", age: 15 };

function App() {
  return (
    <div>
      <Greeting firstName="Aditya" lastName="Sharma" userInfo={User}/>
    </div>
  );
}

export default App;
