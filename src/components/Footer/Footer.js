import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faComment, faAddressBook } from '@fortawesome/free-solid-svg-icons';

import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div><FontAwesomeIcon icon={faHome} /></div>
                <div><FontAwesomeIcon icon={faAddressBook} /></div>
                <div><FontAwesomeIcon icon={faComment} /></div>

            </div>
        )
    }
}


export default Footer;
