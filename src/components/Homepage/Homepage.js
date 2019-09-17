import React, {Component} from 'react';
import { connect } from "react-redux";

import client from '../../actions/index';
import { DOGS_LOADED } from '../../constants/action-types';
import logo from '../../assets/images/app-logo.jpg';
import './Homepage.css';

// custom components:
import DoggoList from '../DoggoList/DoggoList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class Homepage extends Component {
    componentDidMount() {
        this.props.onLoad(client.Animals.dogs());
    }

    render() {
        return (
            <div>
                <Header />

                <DoggoList dogs={this.props.dogs}/>
                {/*<Org dogs={this.state.dogs} />*/}

                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => {
  return { dogs: state.dogs };
};

const mapDispatchToProps = dispatch => ({
    onLoad: (payload) =>
        dispatch({type: DOGS_LOADED, payload})
})

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
