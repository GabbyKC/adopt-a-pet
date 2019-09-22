import React, {Component} from 'react';
import { connect } from "react-redux";

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import './DogGif.css';

import { getGif } from '../../actions/index';

class DogGif extends Component {
    componentDidMount() {
        this.props.onLoad();
    }
    render() {
        const gifUrl = this.props.gif;

        let gifElement = <div className='info-loader'></div>
        if (gifUrl) {
            gifElement = <img className='gif-image' src={gifUrl} alt="" />
        }
        return (
            <div>
                <Header />
                <p className='doggo-gif'>Doggo Gifs for your enjoyment</p>
                <div className='gif-button-container'><button className="button" onClick={this.props.onLoad}>Another</button></div>
                {gifElement}
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => {
  return { gif: state.dogGif };
};

const mapDispatchToProps = dispatch => ({
    onLoad: () => dispatch(getGif())
});

export default connect(mapStateToProps, mapDispatchToProps)(DogGif);
