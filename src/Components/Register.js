import React from "react";

class Register extends React.Component{
 constructor(props){
  super(props);
 this.state = {
  name:'',
  email: '',
  password:''
   }
  }
  onNameChange = event => {
    this.setState({name:event.target.value})
  }

  onEmailChange = event => {
    this.setState({email:event.target.value})
  }
  onPasswordChange = event => {
    this.setState({password:event.target.value})
  }

  onSubmitSignIn = () => {
      document.getElementById('sign').textContent = 'registering you...';
    fetch('https://smartbrain-api-zmys.onrender.com/register',{
      method:'post',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({
        name:this.state.name,
        email: this.state.email,
        password: this.state.password
      })
    })
    .then(response=>{
      return response.json()})
    .then(user=>{
      if (user.id) {
        this.props.loadUser(user)
        this.props.routeChange('home');
        document.getElementById('reg').textContent = `Welcome ${this.props.username}`
      }
     else{document.getElementById('sign').textContent = 'not registered'}
    }).catch(err=>{
      document.getElementById('sign').textContent = 'connection error: Please make sure that your internet connection is good and try again'
    })
  }

   render(){
    return(
        <main className="pa4 rg black-80">
          <h5 className="center indicator" id="sign"></h5>
        <div className="measure ml-3 center">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw3  ph0 mh0">Register</legend>
            <div className="mt3">
              <label className="db  fw6 lh-copy f6" htmlFor="name">Name</label>
              <input onChange={this.onNameChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-80" type="text" name="name"  id="name"/>
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input onChange={this.onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-80" type="email" name="email-address"  id="email-address"/>
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input onChange={this.onPasswordChange}  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-80" type="password" name="password"  id="password"/>
            </div>
          </fieldset>
          <div className="flex center">
            <input onClick={this.onSubmitSignIn} className="b ph3 pv2 input-reset ba b--black bg-transparent center grow pointer f6 dib" type="submit" value="Register"/>
          </div>
        </div>
      </main>
      
    )
   }
}


export default Register;