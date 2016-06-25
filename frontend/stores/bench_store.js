const AppDispatcher = require('../dispatcher/dispatcher');
const BenchConstants = require('../constants/bench_constants');
const Store = require('flux/utils').Store;
const BenchStore = new Store(AppDispatcher);

let _benches = {};

BenchStore.all = function() {
  const benches = [];
  for (let bench in _benches) {
    if (_benches.hasOwnProperty(bench)) {
      benches.push(_benches[bench]);
    }
  }
  return benches;
};

BenchStore.resetAllBenches = function (benches){
  _benches = benches;
  BenchStore.__emitChange();
};

BenchStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case BenchConstants.BENCHES_RECEIVED:
      this.resetAllBenches(payload.benches);
      break;
  }
};


module.exports = BenchStore;
