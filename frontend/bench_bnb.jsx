const React = require('react');
const ReactDOM = require('react-dom');
const BenchSearch = require('./components/bench_search.jsx');

$(() => {
  ReactDOM.render(<BenchSearch/>, document.getElementById('content'));
});
