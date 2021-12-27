import React, { Component } from "react";
import imgprofil from '../component/profilimg-modified.jpg'
class Profil extends Component {

    state = {
        fullName: 'Aymen',
        bio: 'Jonior Web devlopper',
        imgSrc: imgprofil,
        profession: 'Web devlopper',
        shows: false
    };
    changeShows() {
        this.setState.shows = !this.state.shows
    }

    render() {
        return (
            <>
                <button onClick={() => { this.changeShows() }}>SHOW</button>
                {this.state.shows && (<div>

                    <h1> My name is {this.state.fullName} </h1>
                    <h2> BIO : {this.state.bio} </h2>
                    <img src={this.state.imgSrc} />
                    <h3> Profession :{this.state.profession} </h3>
                </div>)}
            </>
        );
    };
}

export default Profil