import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faComment, faAddressBook, faDog } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <Link to={{pathname: '/', state: null}}>
                    <FontAwesomeIcon icon={faHome} />
                </Link>
                <Link to ='/org'><FontAwesomeIcon icon={faAddressBook} /></Link>
                <Link to ='/chat'><FontAwesomeIcon icon={faComment} /></Link>
                <Link to ='/gifs'><FontAwesomeIcon icon={faDog} /></Link>
            </div>
        )
    }
}

export default Footer;
