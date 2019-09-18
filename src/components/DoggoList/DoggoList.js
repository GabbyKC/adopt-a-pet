import React, {Component} from 'react';
import './DoggoList.css';

class DoggoList extends Component {
    render() {
        const doggos = this.props.dogs;
        if (!doggos || doggos.length === 0) {
            return (
                <div>There are no doggos ;(</div>
            )
        }

        return (
            <div className='dogs-container'>
            {doggos.map(function(dog, index) {
                let hasPhotos = dog.photos.length > 0 && dog.photos[0].small !== undefined
                return (
                    <div key={dog.id} className='dog-box'>
                        <div className='image-container'>
                            { hasPhotos ? <img src={dog.photos[0].small} alt="doggo" /> : ''}
                        </div>
                        <p className='dog-name'>{dog.name}</p>
                    </div>
                )
            })}
            </div>
        )
    }
}

export default DoggoList;
