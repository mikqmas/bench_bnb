const BenchStore = require('../stores/bench_store');

const BenchApiUtil = {
  fetchAllBenches(bounds, success){
    $.ajax({
      url: '/api/benches',
      method: 'GET',
      data: bounds,
      success: function(response){
        success(response);
      }
    });
  }
};

module.exports = BenchApiUtil;
