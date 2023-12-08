import React from "react"

const Profile = ({user}) =>{
 
   return(
    <section className="profile-section">
        <div className="flex ma3 pa3 tc"><span className="shadow-4 bg-light-blue avater pa3">{user.name.length > 0? user.name[0].toUpperCase():''}</span></div>
        <h1 className="tc blue">Your profile</h1>
    <div className="flex pa3 profile">
        <div className="flex pa4 shadow-4 profile-wrapper">
          <div className="bg-light-blue blue pa3"> <strong> user_id: </strong> <span>{user.id}</span></div>
          <div  className="bg-light-blue blue pa3"> <strong> Name: </strong> <span>{user.name}</span></div>
          <div  className="bg-light-blue blue pa3"> <strong> Email: </strong> <span>{user.email}</span></div>
          <div  className="bg-light-blue blue pa3"> <strong> joined: </strong> <span>{user.joined}</span></div>
          <div  className="bg-light-blue blue pa3"> <strong> Entries: </strong> <span>{user.entries}</span></div>
        </div>
    </div>
    </section>
   )
}

export default Profile;