import React, {Component} from 'react';
import { Client } from "@petfinder/petfinder-js";
import logo from '../../assets/images/app-logo.jpg';
import './Homepage.css';

// custom components:
import DoggoList from '../DoggoList/DoggoList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class Homepage extends Component {
    state = {
        isLoading: true,
        dogs: []
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        const client = new Client({apiKey: "WjqoS08v7pRPJ2offXSrIW0RaORTy296kNOjNu7l8O94y0IYTy", secret: "CTMMNXK3b8TcjiNT4GNhzeCqetoF2HZNk5c0mjF0"});

        client.animal.search({type: 'dog', location: 'hawaii', status: 'adoptable'})
            .then((response) => {
                this.setState({
                    isLoading: false,
                    dogs: response.data.animals
                });
            })
            .catch((error) => {
                console.log('An error occurred: ' + error);
            });
    }

    render() {
        if(this.state.isLoading) {
            return (
                <div className='logo-container'>
                    <img className='app-logo' src={ logo } alt="it broke" />
                </div>
            )
        } else {
            return (
                <div>
                    <Header />
                    <DoggoList dogs={this.state.dogs}/>
                    <Footer />
                </div>
            );
        }
    }
}



export default Homepage;
