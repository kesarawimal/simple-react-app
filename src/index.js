import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetails from "./components/video_details";

import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyD7TuOH1JB4xKs7A_uuXQvPDVL3_DGKsrc';

class App extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {videos: [], selectedVideo: null};

        this.fetchVideos();
    }

    fetchVideos(term = 'travelling') {
        YTSearch({key: API_KEY, term: term}, (data) => {
            this.setState({videos: data, selectedVideo: data[0]})
        });
    }

    render() {
        const videoSearch = _.debounce((term) => this.fetchVideos(term), 300);

        return (<div className="container">
            <div className="row">
                <div className="col-md-12">
                    <SearchBar onSearchItem={videoSearch}/>
                </div>
            </div>
            <div className="row">
                <VideoDetails video={this.state.selectedVideo}/>
                <VideoList videos={this.state.videos}
                           onVideoSelect={(video) => this.setState({selectedVideo: video})}/>
            </div>
        </div>);
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));