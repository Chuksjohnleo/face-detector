import React from 'react';
import Navigation from './Components/Navigation';
import './App.css';
import Logo from './Components/Logo';
import ImageLinkForm from './Components/ImageLinkForm';
import Rank from './Components/Rank';
import FaceRecognition from './Components/FaceRecognition'
import SignIn from './Components/SignIn';
import Register from './Components/Register';
import Profile from './Components/Profile';


const initialState = {
  input: '',
  imageurl: '',
  box: {},
  route:'signin',
  isSignedIn: false,
  users:[],
  btn:'Choose from device',
  filepath:'link',
  filename:'',
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
    sessionStorage.setItem('user',JSON.stringify(data))
  }
  componentDidMount(){
     if(sessionStorage.getItem('user')){
         this.loadUser(JSON.parse(sessionStorage.getItem('user')))
         this.setState({route:'home',isSignedIn:true});
     };
  }
changeFilepath = () =>{
  if(this.state.filepath === 'link'){
    this.setState({filepath: 'device',btn:'Use a url link'});
  }else{
    this.setState({filepath: 'link',btn:'Choose from device'});
  }
}
  calcFace = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const height = Number(image.height);
    const width = Number(image.width);

    return{
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  routeChange = (route) => {
    if (route === 'signin') {
      this.setState(initialState);
      sessionStorage.clear();
    } else if (route === 'home') {
      this.setState({ isSignedIn: true })
    }
    this.setState({ route: route })
  }
  

   dispBox = (box) => {
     this.setState({ box: box})
   }
   onInputChange = (event) => {
     this.setState({input:event.target.value, imageurl: event.target.value});
   }
  onInputChange2 = (event) => {
     this.setState({filename:event.target.value})
     const reader = new FileReader();
     reader.readAsDataURL(event.target.files[0]);
     reader.onload = () =>{
    this.setState({input: reader.result,imageurl:reader.result});
   };
  };
 onSubmit = (e) => {
 e.preventDefault();
 this.setState({connections:'Detecting....'})
 let acceptableUrl = this.state.input.replace(/^data:image\/(.*);base64,/, '');

    fetch('https://smartbrain-api-zmys.onrender.com/detect',{
      method:'post',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({input:  acceptableUrl})
    }).then(res=>{
      return res.json()
    }).then(response => {
      this.setState({connections:''});
        if(response.outputs[0]){ 
          fetch('https://smartbrain-api-zmys.onrender.com/image',{
            method:'put',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({id: this.state.user.id})
          })
          .then(resp=>{
          return  resp.json();
          })
          .then(res=>{
            this.setState(Object.assign(this.state.user,{entries:res}));
            sessionStorage.setItem('user',JSON.stringify(this.state.user))
          }).catch(err=>{console.log('error')})
        }
        this.dispBox(this.calcFace(response))
        })
        .catch(err => {
        this.setState({connections:'failed to detect'})
      });
  }
  render() {
  const  {isSignedIn,imageurl,route,box,connections,btn,filepath,filename,user} = this.state;
  return (
  <div>
    <div className='body' >
      <Navigation route={route}  isSignedIn={isSignedIn} routeChange={this.routeChange} />
      { route === 'home'
        ? <div>
            <div className='logo'><Logo /></div>
            <Rank
              user={this.state.user}
            />
            <ImageLinkForm
            btn={btn}
            filename={filename}
            changeFilepath={this.changeFilepath}
            path={filepath}
            onInputChange2={this.onInputChange2}
             connections={connections}
              onInputChange={this.onInputChange}
              onSubmit={this.onSubmit}
            />
            <FaceRecognition box={box} imageurl={imageurl} />
          </div>
        : route === 'profile'? <Profile user={user} />
        : (
           route === 'signout' || route === 'signin'
           ? <SignIn loadUser={this.loadUser} routeChange={this.routeChange}/>
           : <Register username={this.state.user.name} loadUser={this.loadUser} routeChange={this.routeChange}/>
          )
      }
    </div>
    <footer style={{position: 'sticky',bottom: '0px',transform: 'translateY(50vh)', textAlign: 'center',borderTop: '2px solid grey'}}>
      <p>Website by <a style={{textDecoration: 'none',color: 'blue'}} href="https://chuksjohnleo.github.io">Chuksjohnleo</a></p>
      <p>Copyright © 2023 Chuksjohnleo, All rights reserved.</p>
    </footer>
    </div>
  );
    }
  }

export default App;
