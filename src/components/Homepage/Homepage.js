import React, {Component} from 'react';
import { Client } from "@petfinder/petfinder-js";
import logo from '../../assets/images/app-logo.jpg';
import './Homepage.css';

// custom components:
import DoggoList from '../DoggoList/DoggoList';
import Org from '../Organisations/Org';
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
        const client = new Client({apiKey: "Puy3fIqnfC6zp1ZRxwCQXHJ9zPaFWetKggFX78leCV7WZtQa61", secret: "qCycVDErMAKaQsKaSpMnabPW65zFue0SQQAyrVFz"});

        client.animal.search({type: 'cat'&'dog', location: 'hawaii', status: 'adoptable'})
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
                    {/*<Org dogs={this.state.dogs} />*/}

                    <Footer />
                </div>
            );
        }
    }
}



export default Homepage;
