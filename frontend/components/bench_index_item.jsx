const React = require('react');

module.exports = React.createClass({
  render(){
    return(
      <div>
        {this.props.bench.description}
        {this.props.bench.lat}
        {this.props.bench.lng}
      </div>
    );
  }
});
