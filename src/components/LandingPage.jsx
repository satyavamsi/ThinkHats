import React, {Component} from 'react';
import landingpage from '../assets/landingpage.jpg'
class LandingPage extends Component {
    render() {
        return(
            <div style={{height: '100%', width: '100%' , 
            }}>
                <div style={{width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 2,
            position: 'fixed'}}></div>
                <img src={landingpage} height="100%" width="100%" style={{position: 'fixed'}} alt=""/>
                <div style={{zIndex: 3, display: 'flex', position: 'fixed', height: '100%',  width: '100%'}}>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', 
                    height: '100%', width: '100%', color: 'white', alignItems: 'center'}}>
                        <h1 style={{fontSize: 72, marginTop: -100, marginBottom: 20, color: '#dc6c40',
                    fontFamily: 'Roboto monospace', letterSpacing: '0.1em'}}>Think Hats</h1>
                        <h1 style={{margin: 0}}>Coming Soon...</h1>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default LandingPage;