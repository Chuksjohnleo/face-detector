import Navigation from './Navigation';
import './App.css';
import Logo from './Logo';
import ImageLinkForm from './ImageLinkForm';
import Rank from './Rank';
import React from 'react';
import FaceRecognition from './FaceRecognition'
import SignIn from './SignIn';
import Register from './Register';


const initialState = {
  input: '',
  imageurl: '',
  box: {},
  route: 'signin',
  isSignedIn: false,
  users:[],
  user:{
    id:'',
    name: '',
    email: '',
    password: '',
    entries: 0,
    joined: ''
        }
}
class App extends React.Component {
  constructor() {
    super()
    this.state = initialState;
  }
  loadUser=(data)=>{
    this.setState(
     {user : {
        id:data.id,
        name:data.name,
        email: data.email,
        password: data.password,
        entries:data.entries,
        joined: data.joined,
        connections:''
            }
          
          }
    )
  }
  profile = ()=> {
    fetch('https://murmuring-escarpment-27687.herokuapp.com//users')
    .then(res=>{return res.json()})
    .then(res=>{
      console.log(res)
      this.setState({users:res});
      console.log(this.state.users)
    })
    .catch(err=>{console.log(err)})
  }

  calcFace = (data) => {
    //console.log(data);
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const height = Number(image.height);
    const width = Number(image.width);
    console.log(clarifaiFace);

    return{
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  routeChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState);
    } else if (route === 'home') {
      this.setState({ isSignedIn: true })
    }
    this.setState({ route: route })
  }
  

   dispBox = (box) => {
     this.setState({ box: box})
   }
  onInputChange = (event) => {
    this.setState({ input: event.target.value })
  }
  onSubmit = () => {
    this.setState({ imageurl: this.state.input });
    fetch('https://murmuring-escarpment-27687.herokuapp.com/apikey',{
      method:'post',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({
              input : this.state.input
            })
    }).then(res=>{return res.json()})
      .then(response => {
        if(response){
          fetch('https://murmuring-escarpment-27687.herokuapp.com/image',{
            method:'put',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
          .then(resp=>{
          return  resp.json();
          })
          .then(res=>{
            this.setState(Object.assign(this.state.user,{entries:res}))
          }).catch(err=>{console.log(err)})
        }
        this.dispBox(this.calcFace(response))
        })
        .catch(err => {
        this.setState({connections:err.message})
        console.log(err)
      })

  }
  render() {
  const  {isSignedIn,imageurl,route,box,connections} = this.state;
  return (
   
    <div>
      {/* <Admin users={this.state.users} routeChange={this.routeChange}/> */}
      <Navigation  isSignedIn={isSignedIn} routeChange={this.routeChange} />
      { route === 'home'
        ? <div>
            <Logo />
            <Rank
              user={this.state.user}
            />
            <ImageLinkForm
             connections={connections}
              onInputChange={this.onInputChange}
              onSubmit={this.onSubmit}
            />
            <FaceRecognition box={box} imageurl={imageurl} />
          </div>
        : (
           route === 'signout' || route === 'signin'
           ? <SignIn loadUser={this.loadUser} routeChange={this.routeChange}/>
           : <Register username={this.state.user.name} loadUser={this.loadUser} routeChange={this.routeChange}/>
          )
      }
    </div>
  );
    }
  }

export default App;
