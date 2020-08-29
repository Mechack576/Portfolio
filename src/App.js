import React, {Component} from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/profile.png';



class App extends Component{
    state = {displayBio: false};
    // constructor(){
    //     super();
    //     this.state = {displayBio: false};

       
        // this.readMore = this.readMore.bind(this);
        // this.showLess = this.showLess.bind(this);
    //     this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    // }
    // readMore(){
       
    //     this.setState({displayBio: true });

    // }
    // showLess(){
    //     this.setState({displayBio: false});
    // }
    toggleDisplayBio = () => {
        //Sets the state to it's opposite value
        this.setState({displayBio: !this.state.displayBio});
    }
    render(){
        return(
            <div> 
            <img src={profile} alt= 'profile' class='profile' />
            <h1>Hello</h1>
            <p> My name is Mechack, I am a software engineer.</p>
			<p> I love learning new technologies. React is dope!</p>
            {
                this.state.displayBio? (<div>
            <div>
            <p> I live in Providence, and code everyday.</p>
            <p> My favorite languages are Java and  python.</p>
            <p> Besides coding, I am a trader, soccer player and photographer!</p>
            <button onClick = {this.toggleDisplayBio}> Show less</button>
            </div>
            </div>) : (
                <div>
                <button onClick = {this.toggleDisplayBio}> Read More</button>
                </div> )
            }
            <hr />
            <Projects />
            <hr />
            <SocialProfiles />
            </div>
        )
    }
}
export default App;
