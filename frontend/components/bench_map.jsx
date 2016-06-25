const React = require('react');
const ReactDOM = require('react-dom');
const BenchStore = require('../stores/bench_store');
const BenchActions = require('../actions/bench_actions');

module.exports = React.createClass({
  getInitialState(){
    return({benches: BenchStore.all()});
  },
  componentDidMount(){
    BenchStore.addListener(this._onChange);
    const mapDOMNode = ReactDOM.findDOMNode(this.refs.map);
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435}, // this is SF
      zoom: 13
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.map.addListener('idle', this._idleEventHandler);
  },
  _idleEventHandler(){
    this.LatLngBounds = this.map.getBounds();
    let bounds = {
      northWest:
        {lat: this.LatLngBounds.getNorthEast().lat(),
        lng: this.LatLngBounds.getNorthEast().lng()},
      southEast:
        {lat: this.LatLngBounds.getSouthWest().lat(),
        lng: this.LatLngBounds.getSouthWest().lng()},
    };
    BenchActions.fetchAllBenches(bounds);
  },
  _onChange(){
    this.setState({benches: BenchStore.all()});
    this.state.benches.forEach((bench) => {
      new google.maps.Marker({
        position: {lat: bench.lat ,lng: bench.lng },
        map: this.map,
        animation: google.maps.Animation.DROP,
        title: bench.description
      });
    });
  },
  render(){
    return(
      <div className='map' ref='map'></div>
    );
  }
});
