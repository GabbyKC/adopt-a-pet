import React, {Component} from 'react';
import './Homepage.css';

// custom components:
import DoggoList from '../DoggoList/DoggoList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

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
