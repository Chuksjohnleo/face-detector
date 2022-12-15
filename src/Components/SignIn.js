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
    document.getElementById('sign').textContent = 'logging in.....';
    //event.preventDefault(); use this for <form>s or remove it for <div>s
    fetch('https://smartbrain-api-zmys.onrender.com/signin',{
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
      else{
        document.getElementById('sign').textContent = 'wrong details please check your details and try again'
        console.log('ado oni')}
    } ).catch(err=>{
      document.getElementById('sign').textContent = 'connection error: Please make sure that your internet connection is good and try again'
    })
  }
   render(){
    //const {routeChange} = this.props;
    return(

        <main className="pa4 center rg black-80">
          <h5 className="center indicator" id="sign"></h5>
        <div className="measure form center">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw3  ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input onChange={this.onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-light-blue hover-black w-100" type="email" name="email-address"  id="email-address"/>
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input onChange={this.onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-light-blue hover-white w-100" type="password" name="password"  id="password"/>
            </div>
          </fieldset>
          <div className="flex center">
            <input onClick={this.onSubmitSignIn}  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
          </div>
        </div>
      </main>    
    )
 }
}

export default SignIn;