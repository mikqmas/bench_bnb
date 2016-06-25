const React = require('react');
const BenchIndex = require('./bench_index');
const BenchMap = require('./bench_map');


module.exports = React.createClass({
  render(){
    return(
      <div>
        <BenchMap />
        <BenchIndex />
      </div>
    );
  }
});
