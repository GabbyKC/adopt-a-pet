import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div>
                <div className='logo'>Find A Pet <FontAwesomeIcon icon={faPaw} /></div>
                <div className='filters'>filters go here</div>
            </div>
        )
    }
}


export default Header;
