import './App.css';
import React, { Component } from 'react'
import imgprofil from './profilimg-modified.jpg'

class App extends Component {
  state = {
    fullName: 'Aymen',
    bio: 'Jonior Web devlopper',
    imgSrc: imgprofil,
    profession: 'Web devlopper',
    shows: false,
    count:0,
  };
  changeShows() {
    console.log("avant", this.state.shows)
    this.setState({ shows: !(this.state.shows) }, () => console.log("apre", this.state.shows))
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({count: this.state.count +1});
    }, 1000);

  }
  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: 50 }} >
        <button onClick={() => { this.changeShows() }} >SHOW</button>
        {this.state.shows ? <div>
          <h1> My name is {this.state.fullName} </h1>
          <h2> BIO : {this.state.bio} </h2>
          <img src={this.state.imgSrc} alt='img' />
          <h3> Profession :{this.state.profession} </h3>
        </div>
          : null}
       <p>
       Time interval since the component was mounted: {this.state.count}
       </p> 
       

      </div>
    );

  };
}

export default App;
