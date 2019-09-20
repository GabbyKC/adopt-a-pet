import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import missingImage from '../../assets/images/missing-image.gif';

import './DogCard.css';

class DogCard extends Component {

    handleClick() {
        this.props.history.push(`/dogs/${this.props.dog.id}`);
    }

    hasPhotos() {
        let photos = this.props.dog.photos;
        return photos && photos.length > 0 && photos[0].full !== undefined;
    }

    render() {
        return (
            <div className='dog-box' onClick={() => this.handleClick()}>
                <div>
                    { this.hasPhotos() ? <img src={this.props.dog.photos[0].full} alt="doggo" /> : <img src={missingImage} alt="doggo" />}
                </div>
                <div className='dog-name'>{this.props.dog.name}</div>
            </div>
        )
    }
}

export default withRouter(DogCard);
