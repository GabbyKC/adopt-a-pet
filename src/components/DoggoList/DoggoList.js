import React, {Component} from 'react';
import { connect } from "react-redux";
import InfiniteScroll from 'react-infinite-scroller';

import DogCard from '../DogCard/DogCard';
import { getDogs } from '../../actions/index';
import './DoggoList.css';

class DoggoList extends Component {

    render() {
        const doggos = this.props.dogs;
        return (
            <InfiniteScroll
                loadMore={() => this.props.onLoad(this.props.currentPage)}
                hasMore={this.props.hasMoreDogs}
                initialLoad={true}
                loader={<div className="loader" key={0}>Fetching the doggos ...</div>}
                useWindow={true}
            >
            <div className='dogs-container'>
                {doggos.map((dog, index) => {
                    return (
                        <DogCard key={dog.id} dog={dog}/>
                    )
                })}
            </div>
            </InfiniteScroll>
        )
    }
}

const mapStateToProps = state => {
  return { dogs: state.dogs, currentPage: state.currentPage, hasMoreDogs: state.hasMoreDogs };
};

const mapDispatchToProps = dispatch => ({
    onLoad: (pageNumber) => dispatch(getDogs(pageNumber))
});

export default connect(mapStateToProps, mapDispatchToProps)(DoggoList);
