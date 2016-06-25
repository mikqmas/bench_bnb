const React = require('react');
const BenchStore = require('../stores/bench_store');
const BenchIndexItem = require('./bench_index_item');

module.exports = React.createClass({
  getInitialState() {
    return( {benches: BenchStore.all()} );
  },
  componentDidMount(){
    BenchStore.addListener(this._handleChange);
  },
  _handleChange(){
    this.setState({benches: BenchStore.all()});
  },
  render(){
    return(
      <div>
        {
          this.state.benches.map((bench) => {
            return <BenchIndexItem key={bench.lat} bench={bench} />;
          })
        }
      </div>
    );
  }
});
