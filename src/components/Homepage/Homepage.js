import React, {Component} from 'react';
import './Homepage.css';

// custom components:
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import DoggoList from '../DoggoList/DoggoList';

class Homepage extends Component {
    render() {
        return (
            <div>
                <Header />
                <DoggoList />
                <Footer />
            </div>
        );
    }
}


export default Homepage;
