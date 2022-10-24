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
  //start


  // sendMessage = (a) => {
  //  // e.preventDefault();
  //   //this.timer = 
  //   setTimeout(() =>{
  //     // if (a) {
  //     //   this.props.loadUser(a)
  //     //   this.props.onRouteChange('home');
  //     //   console.log('please')
  //     // }
  //   } , 10000);
  // }

  // componentWillUnmount() {
  //   clearTimeout(this.timer);
  // }


  //stop
  onSubmitSignIn = () => {
    fetch('https://murmuring-escarpment-27687.herokuapp.com/register',{
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
        console.log('please')
        this.props.loadUser(user)
        this.props.routeChange('home');
        console.log(user)
      }
     // console.log('bullshit')
    })
  }

   render(){
    return(
        <main className="pa4 ma6 black-80">
        <div className="measure center">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6  ph0 mh0">Register</legend>
            <div className="mt3">
              <label className="db  fw6 lh-copy f6" htmlFor="name">Name</label>
              <input onChange={this.onNameChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name"/>
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input onChange={this.onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input onChange={this.onPasswordChange}  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
            </div>
          </fieldset>
          <div className="flex center">
            <input onClick={this.onSubmitSignIn} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register"/>
          </div>
        </div>
      </main>
      
    )
   }
}


export default Register;