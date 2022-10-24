import React from "react";

const Admin = ({users,routeChange}) =>{
    return(
        users.map(user=>{
        return(
            <section className="bg-yellow ma4" key={user.id}>
                <button onClick={()=>routeChange('home')}>back</button>
                <div>ID: {user.id}</div>
                <div>Name:{user.name}</div>
                <div>Email:{user.email} </div>
                
            </section>
                        )
      
   })
   )
}

export default Admin;