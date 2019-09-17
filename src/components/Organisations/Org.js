import React, {Component} from 'react';

class Org extends Component {
    render() {
        const doggos = this.props.dogs;
        return (
            <div>
            {doggos.map(function(dog, index) {
                return (
                    <div key={dog.id}>
                        <ul>
                            <li>{dog['_links'].organization.href}</li>
                        </ul>
                    </div>
                )
            })}
            </div>
        )
    }
}

export default Org;
