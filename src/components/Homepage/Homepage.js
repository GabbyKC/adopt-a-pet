import React, {Component} from 'react';
import { connect } from "react-redux";

import { getDogs } from '../../actions/index';
import logo from '../../assets/images/app-logo.jpg';
import './Homepage.css';

// custom components:
import DoggoList from '../DoggoList/DoggoList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class Homepage extends Component {
    componentDidMount() {
        this.props.onLoad();
    }

    render() {
        if (this.props.isLoading) {
            return (
                <div className='logo-container'>
                    <img className='app-logo' src={ logo } alt="it broke" />
                </div>
            )
        } else {
            return (
                <div>
                    <Header />
                    <DoggoList dogs={this.props.dogs}/>
                    <Footer />
                </div>
            );
        }
    }
}

const mapStateToProps = state => {
  return { dogs: state.dogs, isLoading: state.isLoading };
};

const mapDispatchToProps = dispatch => ({
    onLoad: () => dispatch(getDogs())
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
