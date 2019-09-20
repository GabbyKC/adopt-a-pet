import React, {Component} from 'react';

class DogInfo extends Component {

    render() {
        return (
            <div>
                <h1>Doggo {this.props.match.params.dogId}</h1>
            </div>
        )
    }
}

export default DogInfo;
