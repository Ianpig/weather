import React,{ Component } from 'react';

class GoogleMap extends Component {
  componentDidMount(){
    let map = new google.maps.Map(this.refs.map,{
      zoom:12,
      center: {
        lat:this.props.lat,
        lng:this.props.lon
      }
    });
    let marker = new google.maps.Marker({
      position: {
        lat:this.props.lat,
        lng:this.props.lon
      },
      title: this.props.name
    });
    marker.setMap(map);
    console.log(marker)
  }
  render(){
    return <div ref="map"/>;
  }
}

export default GoogleMap;