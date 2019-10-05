import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faComment, faAddressBook, faDog } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                {/*passing state: null so that we can scroll to top from homepage component*/}
                <NavLink exact={true} activeClassName='active' to={{pathname: '/', state: null}}>
                    <FontAwesomeIcon icon={faHome} />
                </NavLink>
                <NavLink activeClassName='active' to ='/org'><FontAwesomeIcon icon={faAddressBook} /></NavLink>
                <NavLink activeClassName='active' to ='/chat'><FontAwesomeIcon icon={faComment} /></NavLink>
                <NavLink activeClassName='active'to ='/gifs'><FontAwesomeIcon icon={faDog} /></NavLink>
            </div>
        )
    }
}

export default Footer;
