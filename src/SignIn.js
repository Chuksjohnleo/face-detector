import React from "react";

class SignIn extends React.Component { 
  constructor(props){
    super(props);
    this.state = {
      signInEmail:'',
      signInPassword:''
    }
  }
  onEmailChange = event => {
    this.setState({signInEmail:event.target.value})
  }
  onPasswordChange = event => {
    this.setState({signInPassword:event.target.value})
  }
  onSubmitSignIn = () => {
    //event.preventDefault(); use this for <form>s or remove it for <div>s
    fetch('https://murmuring-escarpment-27687.herokuapp.com/signin',{
      method:'post',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
     .then(response=>{
      return response.json()})
    .then(user =>{
      if(user.id){
        this.props.loadUser(user);
        this.props.routeChange('home');
      }
      else{console.log('ado oni')}
    } )
  }
   render(){
    const {routeChange} = this.props;
    return(

        <main className="pa4 black-80">
        <div className="measure center">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6  ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input onChange={this.onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-light-blue hover-black w-100" type="email" name="email-address"  id="email-address"/>
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input onChange={this.onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-light-blue hover-white w-100" type="text" name="password"  id="password"/>
            </div>
          </fieldset>
          <div className="flex center">
            <input onClick={this.onSubmitSignIn}  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
          </div>
          <div className="lh-copy signin mt3">
            <p onClick={()=>routeChange('register')}  className="f6 link dim black db">Sign up</p>
          </div>
        </div>
      </main>    
    )
 }
}

export default SignIn;