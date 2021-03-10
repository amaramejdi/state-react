import React from 'react'
import PropTypes from 'prop-types';
import foto from './foto.JPG';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
                 fullName: "Amara Majdi",
                 bio: "BIO",
                 imgSrc: <img src={foto} alt="My picture" />,
                 profession: "Technicien",
                 bool: true
                };
  }


  handleBool = ()=>{
    this.setState({bool: !this.state.bool})
  }

  render() {
    return (
      <div className="primera">
        <div className="header">
           <h1>Welcome to My Profil</h1>
        </div>
        <button
          type="button"
          onClick={this.handleBool}
        >Informations</button>
        <div className="bodyint">
          {this.state.bool  ?  <div>
              <p><b>Full Name :</b> {this.state.fullName}</p>
        <p><b>Bio :</b> {this.state.bio}</p>
        <p><b>Profession</b> {this.state.profession}</p>
        <p>{this.state.imgSrc}</p>
          </div> : <p>No informations to show</p>}
         
      
        </div>

      </div>
    );
  }
}
 alert (setInterval(App, 1000));


export default App;