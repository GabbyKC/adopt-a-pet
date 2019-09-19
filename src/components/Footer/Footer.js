import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faComment, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div><Link to ='/'><FontAwesomeIcon icon={faHome} /></Link></div>
                <div><Link to ='/org'><FontAwesomeIcon icon={faAddressBook} /></Link></div>
                <div><Link to ='/chat'><FontAwesomeIcon icon={faComment} /></Link></div>
            </div>
        )
    }
}

export default Footer;
