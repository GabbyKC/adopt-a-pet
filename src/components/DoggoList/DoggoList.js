import React, {Component} from 'react';
import { connect } from "react-redux";
import InfiniteScroll from 'react-infinite-scroller';

import DogCard from '../DogCard/DogCard';
import { getDogs, updateFilter } from '../../actions/index';
import './DoggoList.css';

class DoggoList extends Component {
    render() {
        const doggos = this.props.dogs;

        return (
            <div>
                <div className='filter-container'>
                    <select value={this.props.filters.size} onChange={(e) => this.props.updateFilter('size', e.target.value)}>
                        <option value=''>All Sizes</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                        <option value='xlarge'>xLarge</option>
                    </select>

                    <select value={this.props.filters.age} onChange={(e) => this.props.updateFilter('age', e.target.value)}>
                        <option value=''>All Ages</option>
                        <option value='baby'>Baby</option>
                        <option value='young'>Young</option>
                        <option value='adult'>Adult</option>
                        <option value='senior'>Senior</option>
                    </select>
                </div>
                <div>
                    <InfiniteScroll
                        loadMore={() => this.props.onLoad(this.props.currentPage, this.props.filters)}
                        hasMore={this.props.shouldFetchMore}
                        initialLoad={true}
                        loader={<div className="loader" key={0}>Fetching doggos...</div>}
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
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { dogs: state.animals.dogs, filters: state.animals.filters, currentPage: state.animals.currentPage, shouldFetchMore: state.animals.shouldFetchMore };
};

const mapDispatchToProps = dispatch => ({
    onLoad: (pageNumber, filters) => dispatch(getDogs(pageNumber, filters)),
    updateFilter: (field, value) => dispatch(updateFilter(field, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DoggoList);
