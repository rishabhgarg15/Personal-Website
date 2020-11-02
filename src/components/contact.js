import React, {Component} from 'react';
import {List,ListItem,ListItemContent} from 'react-mdl';
class Contact extends Component{
    render(){
        return(
        	<div className="contact-body">
	            <div className="grid-container">
	            	<div className="grid-item grid-item-1">
	            			<h2 style={{color:'white'}} className="animated fadeInLeftBig">PRERIT KHANDELWAL</h2>
			                <img src="https://d39qdlcrvnra4b.cloudfront.net/avatars/1605846/original/avatar.png?1559039487"
			                    alt="avatar-pic"
			                    style={{height:'250px'}}
			                    className="animated fadeInLeftBig"
			                />
			                <p className="animated fadeInLeftBig" style={{width:'75%', margin:'auto', paddingTop:'2em',color:'white',fontSize:'14px'}}>Thank you for visiting my site!<br/>Let's know each other more.<br/> Contact me on the given contact numbers or drop an email for me at preritkhandalwal@gmail.com.<br/>I'll be happy to hear from you!</p>
			          
	            	</div>
	            	<div className="grid-item grid-item-2">
	            		<div style={{paddingLeft:'3rem'}}>
                <h2 style={{color:'white'}} className="animated fadeInRightBig">CONTACT ME</h2>
                <hr />
                </div>
                <div className="contact-list">
                <List>
                    <ListItem>
                        <ListItemContent style={{fontFamily:'Anton',fontSize:'25px',color:'white'}} className="animated slideInRight delay-3s">
                            <i className="fa fa-phone-square" aria-hidden='true'/>
                            (+91) - 94XXXXXXXX
                        </ListItemContent>
                    </ListItem>
                    <ListItem>
                        <ListItemContent style={{fontFamily:'Anton',fontSize:'25px',color:'white'}} className="animated slideInRight delay-3s">
                            <i className="fa fa-phone-square" aria-hidden='true'/>
                             (+91) - 63XXXXXXXXX
                        </ListItemContent>
                    </ListItem>
                    <ListItem>
                        <ListItemContent style={{fontFamily:'Anton',fontSize:'25px',color:'white'}} className="animated slideInRight delay-3s">
                            <i className="fa fa-home" aria-hidden='true'/>
                             (0141) - 2338905
                        </ListItemContent>
                    </ListItem>
                    <ListItem>
                        <ListItemContent style={{fontFamily:'Anton',fontSize:'25px',color:'white'}} className="animated slideInRight delay-3s">
                            <i className="fa fa-skype" aria-hidden='true'/>
                                preritkhandalwal 
                        </ListItemContent>
                    </ListItem>
                </List>
                </div>
	            	</div>
	            </div>
	        </div>    
        );
    }
}

export default Contact;