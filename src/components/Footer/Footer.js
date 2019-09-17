import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faComment, faAddressBook } from '@fortawesome/free-solid-svg-icons';

import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className='footer'>

                <Link to="/"><FontAwesomeIcon icon={faHome} /></Link>

                <a>
                    <FontAwesomeIcon icon={faHome} />
                </a>
                <a>
                    <FontAwesomeIcon icon={faAddressBook} />
                </a>
                <a>
                    <FontAwesomeIcon icon={faComment} />
                </a>
            </div>
        )
    }
}


export default Footer;
