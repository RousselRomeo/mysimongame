import React, { useState } from 'react'
import User from './User';

const Login = () => {

    
    const [name, setName] = useState('');
    const [users, setUsers] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        users.push(name);

        setName('');
      }

    const handleDelete = (i) => {
        // console.log(i);
        
       // users.splice(i,1);
        setUsers(users=>users.filter((user,index)=>{

            return index !==i

        }));


       // console.log(users);

    }

      

    return (
        <div className="login">
            <div className="container">
      <div className="heading">
        <h1>Player List</h1>
      </div>
      <form>
        <div className="form">
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button type="submit" onClick={handleSubmit}><span >Add Player</span></button>
        </div>
      </form>
      <div>
        <ul>
            {users.map((user, i)=>{
                return (
                <User handleDelete={()=>handleDelete(i)} key={i} title={user} />
                )
                    
            })}
        </ul>
      </div>
    </div>
        </div>
    )
}

export default Login