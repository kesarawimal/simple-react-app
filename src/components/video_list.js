import React, {Component} from 'react';

import VideoListItem from "./video_list_item";

class VideoList extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <ul  className="col-md-4 list-group">
                {this.props.videos.map((video) => {
                    return <VideoListItem onVideoSelect={this.props.onVideoSelect} key={video.etag} video={video}/>;
                })}
            </ul>
        );
    }
}

export default VideoList;