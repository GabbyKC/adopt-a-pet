import React, {Component} from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

import missingDoggo from '../../assets/images/missing-doggo.gif';

import { getSingleDog } from '../../actions/index';

import './DogInfo.css';

class DogInfo extends Component {
    componentDidMount() {
        this.props.onLoad(this.props.match.params.dogId);
    }

    hasPhotos() {
        let photos = this.props.dog.photos;
        return photos && photos.length > 0 && photos[0].full !== undefined;
    }

    render() {
        const doggo = this.props.dog;
        if (!doggo) {
            return (
                <div className='info-loader'></div>
            )
        }
        let description = doggo.description;
        return (
            <div>
            <div className='info-container'>
                <Link className='back-arrow' to ='/'><FontAwesomeIcon icon={faArrowCircleLeft} /></Link>
                <div>
                    { this.hasPhotos() ? <img className='dog-info-images' src={doggo.photos[0].full} alt="doggo" /> : <img className='dog-info-images' src={missingDoggo} alt="doggo" />}
                    <p className='introduction'>Henlo! My name is {doggo.name}</p>
                </div>

                <div className='info-content'>
                    <p><span className='headers'>Gender:</span> {doggo.gender}</p>
                    <p><span className='headers'>Age:</span> {doggo.age}</p>
                    <p><span className='headers'>Size:</span> {doggo.size}</p>
                    <p><span className='headers'>Breed(s):</span> {doggo.breeds.primary} / {doggo.breeds.secondary}</p>
                    <p><span className='headers'>Spayed/ Neutered:</span> {String(doggo.attributes.spayed_neutered)}</p>
                    <p><span className='headers'>House Trained:</span> {String(doggo.attributes.house_trained)}</p>
                    { description ? <p><span>{description}</span></p> : ''}
                    <p><span className='headers'>Contact Info:</span>
                        <li><span className='headers'>Email:</span> {doggo.contact.email}</li>
                        <li><span className='headers'>Number:</span> {doggo.contact.phone}</li>
                    </p>
                </div>
            </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
  return { dog: state.singleDoggo };
};

const mapDispatchToProps = dispatch => ({
    onLoad: (id) => dispatch(getSingleDog(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(DogInfo);
