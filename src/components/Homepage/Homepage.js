import React, {Component} from 'react';
import './Homepage.css';

// custom components:
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import DoggoList from '../DoggoList/DoggoList';

class Homepage extends Component {

    componentDidMount() {
        const item = document.querySelector(
            ".restore-" + this.props.location.state
        );

        if (item) {
            item.scrollIntoView();
        }
    }

    componentDidUpdate(nextProps){
        if (nextProps.location.state === null) {
            console.log('Scrolling to top');
            window.scrollTo(0, 0);
        }
    }

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
