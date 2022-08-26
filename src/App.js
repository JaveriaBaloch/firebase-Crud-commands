import { collection, getDocs, addDoc,updateDoc, doc,deleteDoc } from "firebase/firestore";
import {useState, useEffect} from "react"
import {db} from "./firebase-config"
function App() {
  const [users,setUser] = useState([]);
  const [name,setName] = useState("");
  const [age,setAge] = useState(0);
  const usersCollectionRef = collection(db,"users")
  const createUser = async () =>{
   await addDoc(usersCollectionRef,{name:name,age:age})
  }
  const increaseAge = async (id,age) =>{
    const userDoc = doc(db,"users", id)
    const newFields = {age: 1+parseInt(age)}
    await updateDoc(userDoc, newFields)
  }
  const deleteUser = async (id) =>{
    const userDoc = doc(db,"users", id)
    await deleteDoc(userDoc)

  }
  useEffect(()=>{
    const getUsers = async () => {
     const data = await getDocs(usersCollectionRef);
     setUser(data.docs.map((docs)=>({...docs.data(),id:docs.id})))
    }
    console.log(users)
    getUsers();
  },[users])
  return (

    <div className="App">
     <nav className="nav-dark text-light bg-dark text-center">
      <h1>Users</h1>
     </nav>
     <div className="container my-2">
      <div className="row">
        <div className="col-lg-5 col-md-6 col-sm-9 mx-auto">
          <div className="card card-body">
            <input className="form-control my-1" placeholder="name" onChange={e=>setName(e.target.value)}/>
            <input type="number" className="form-control my-1" placeholder="age" onChange={e=>setAge(e.target.value)}/>
            <button className="btn btn-dark mt-2 mb-1" onClick={createUser}>Add User</button>
          </div>
        </div>
      </div>
     </div>
     <div className="container my-2">
     <table className="table table-dark table-striped">
      <thead>
        <tr>
         <th>Name</th>
         <th>Age</th>
         <th>increase age</th>
         <th>Delete User</th>
        </tr>
      </thead>
      <tbody>
      {users.map(user=>{
        return(<tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.age}</td>
          <td><button onClick={()=>increaseAge(user.id, user.age)} className="btn btn-primary"> + </button></td>
          <td><button onClick={()=>deleteUser(user.id)} className="btn btn-danger"> Delete {user.name} </button></td>

        </tr>)
      })}
      </tbody>
     </table>
     </div>
    </div>
  );
}

export default App;
