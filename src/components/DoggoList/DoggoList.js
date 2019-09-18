import React, {Component} from 'react';
import './DoggoList.css';

class DoggoList extends Component {
    handleClick() {
        console.log('Clicked!');
    }

    render() {
        const doggos = this.props.dogs;
        if (!doggos || doggos.length === 0) {
            return (
                <div>There are no doggos ;(</div>
            )
        }

        return (
            <div className='dogs-container'>
            {doggos.map((dog, index) => {
                let hasPhotos = dog.photos.length > 0 && dog.photos[0].small !== undefined
                return (
                    <div dog-id={dog.id} key={dog.id} className='dog-box' onClick={this.handleClick}>
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
