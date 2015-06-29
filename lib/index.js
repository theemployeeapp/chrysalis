'use strict';
var q = require('q');
var _ = require('lodash');

module.exports = function Chrysalis() {
  var chrysalis = {}, extractor, transformer, comparator, loader;

  chrysalis.setExtractor = function setExtractor(_extractor) {
    extractor = _extractor;
    return chrysalis;
  };

  chrysalis.setTransformer = function setTransformer(_transformer) {
    transformer = _transformer;
    return chrysalis;
  };

  chrysalis.setComparator = function setComparator(_comparator) {
    comparator = _comparator;
    return chrysalis;
  };

  chrysalis.setLoader = function setLoader(_loader) {
    loader = _loader;
    return chrysalis;
  };

  chrysalis.run = function run() {
    if(_.isUndefined(extractor)) {
      throw new Error('Extractor not found, set one with setExtractor(extractor)');
    }
    if(_.isUndefined(transformer)) {
      throw new Error('Transformer not found, set one with setTransformer(transformer)');
    }
    if(_.isUndefined(loader)) {
      throw new Error('Loader not found, set one with setLoader(loader)');
    }

    return extractor.extract()
      .then(transformer.transform)
      .then(function(jsonArray) {
        if(!_.isUndefined(comparator)) {
          return comparator.compare(jsonArray);
        } else {
          return q.resolve({create:jsonArray, update:[], delete: []});
        }
      })
      .then(loader.load);
  };

  return chrysalis;
};
