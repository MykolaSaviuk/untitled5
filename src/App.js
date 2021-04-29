import './App.css'
import User from "./component/user/User";
import {useState} from "react";

let usersList = [
    {name: 'vasya', age: 31, isMarried: false},
    {name: 'kolya', age: 29, isMarried: true},
    {name: 'olya', age: 28, isMarried: false},
    {name: 'max', age: 30, isMarried: true},
    {name: 'anya', age: 31, isMarried: false},
    {name: 'oleg', age: 28, isMarried: false},
    {name: 'andrey', age: 29, isMarried: true},
    {name: 'masha', age: 30, isMarried: true},
    {name: 'olya', age: 231, isMarried: false},
    {name: 'max', age: 100, isMarried: true}
];

function App() {

   let [users,setUsers] = useState(usersList);

   const deleteUser = () => {
        users.pop();
   setUsers([...users]);
       console.log(users);
    };

    return (
        <div>
            {
                users.map((value, index) => <User key={index} {...value}/>)

            }
            <button onClick={deleteUser}>deleteuser</button>

        </div>
    );
}

export default App;