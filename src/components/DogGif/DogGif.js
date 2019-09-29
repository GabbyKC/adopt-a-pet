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
                <div className='gif-content'>
                    <h2 className='heading'>Doggo Gifs</h2>
                    <div className='gif-button-container'><button className="button" onClick={this.props.onLoad}>Another</button></div>
                    {gifElement}
                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => {
  return { gif: state.animals.dogGif };
};

const mapDispatchToProps = dispatch => ({
    onLoad: () => dispatch(getGif())
});

export default connect(mapStateToProps, mapDispatchToProps)(DogGif);
