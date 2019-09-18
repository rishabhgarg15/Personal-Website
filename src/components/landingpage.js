import React, {Component} from 'react';
import {Cell, Grid} from 'react-mdl';
class LandingPage extends Component{
    render(){
        return(
            <div style = {{width:'100%' ,margin:'auto'}}>
                <Grid className = "landing-grid">
                    <Cell cols={12}>
                        <img src="https://d39qdlcrvnra4b.cloudfront.net/avatars/1605846/original/avatar.png?1559039487" 
                        alt="avatar-pic"
                        className="avatar-img">
                        </img>
                        <div className="banner-text">
                            <h1>I'm a Full Stack Developer</h1>
                            <hr/>
                            <p>Machine Learning | React Js | C/C++ | Python| MySQL | Competitive Programming</p>
                            <div className="social-links">
                                {/* LinkedIn*/}
                                <a href="https://www.linkedin.com/in/prerit-khandelwal-411a31156/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden='true'/>
                                </a>
                                {/* Github */}
                                <a href="https://github.com/preritk/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github" aria-hidden='true'/>
                                </a>
                                {/* Youtube */}
                                <a href="https://www.facebook.com/prerit.khandelwal.79" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-facebook-square" aria-hidden='true'/>
                                </a>
                                {/* Instagram */}
                                <a href="https://www.instagram.com/preritkhandalwal/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-instagram" aria-hidden='true'/>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default LandingPage;