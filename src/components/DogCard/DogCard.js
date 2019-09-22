import React, {Component} from 'react';
import missingImage from '../../assets/images/missing-image.gif';
import { Link } from 'react-router-dom';

import './DogCard.css';

class DogCard extends Component {

    hasPhotos() {
        let photos = this.props.dog.photos;
        return photos && photos.length > 0 && photos[0].full !== undefined;
    }

    render() {
        const dogId = this.props.dog.id;
        return (
            <Link className={`dog-box restore-${dogId}`} to={{pathname:`/dogs/${dogId}`, state: dogId}}>
                <div>
                    { this.hasPhotos() ? <img src={this.props.dog.photos[0].full} alt="" /> : <img src={missingImage} alt="" />}
                </div>
                <div className='dog-name'>{this.props.dog.name}</div>
            </Link>
        )
    }
}

export default DogCard;
