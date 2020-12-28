import React, {Component} from 'react';

class GoogleMap extends Component{

    componentDidMount(){  // this method is called automaticaly once the element has been 
                            // rendered on the screen
        new google.maps.Map(this.refs.maps,{ //takes reference to an Html node where we want to render 
                                            // this map to

            zoom: 12,   //
            center:{
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    // ref is a reference -- this.refs.maps
    render(){
        return <div ref="maps"> </div>
    }

}

export default GoogleMap;



