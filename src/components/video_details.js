import React, {Component} from 'react';

class VideoDetails extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        if (!this.props.video) {
            return <div>Loading...</div>;
        } else {
            const videoURL = `https://www.youtube.com/embed/${this.props.video.id.videoId}`;

            return (
                <div className="video-detail col-md-8">
                    <div className="embed-responsive-16by6">
                        <iframe width="100%" height="500px" className="embed-responsive-item" src={videoURL}/>
                    </div>
                    <div className="details">
                        <div><h5>{this.props.video.snippet.title}</h5></div>
                        <div>{this.props.video.snippet.description}</div>
                    </div>
                </div>
            );
        }
    }
}

export default VideoDetails;