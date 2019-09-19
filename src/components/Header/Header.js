import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div>
                <div className='logo'>Adopt A Pet <FontAwesomeIcon icon={faPaw} /></div>
            </div>
        )
    }
}


export default Header;
