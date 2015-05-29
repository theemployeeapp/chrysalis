#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

> The best module ever.


## Install

```sh
$ npm install --save etcl
```


# Usage
Chrysalis is a framework designed to ease the process of data migration and manipulation.  It is built off the concept of ETL (Extract, Transform, Load).  In order to function, Chrysalis requires 3 modules:
- Extractor - [https://github.com/APPrise-Mobile/http-extractor]
- Transformer - [https://github.com/APPrise-Mobile/chryformer]
- Comparator - [https://github.com/APPrise-Mobile/array-comparator]
- Loader - [https://github.com/APPrise-Mobile/rest-loader]

```js
var Chrysalis = require('chrysalis');
var HTTPExtractor = require('http-extractor');
var Chryformer = require('chryformer');
var RESTLoader = requrie('rest-loader');

var extractor = HTTPExtractor('http://somesourceurl.com');
var chryformer = Chryformer({sourceKey: 'destinationKey'});
var loader = RESTLoader('http://somedestinationurl.com');

var chrysalis = Chrysalis();
chrysalis.setExtractor(extractor);
  .setTransformer(chryformer)
  .setLoader(loader)
  .run();
```
#API
- **chrysalis.setExtractor (extractor)** - Provides chrysalis with an extractor **(Required)**.  The extractor is tasked with *extracting* the data from the source url.

- **chrysalis.setTransformer (transformer)** - Provides chrysalis with a transformer **(Required)**.  The transformer is tasked with *transforming* the source data into the desired format.

- **chrysalis.setComparator (comparator)** - Provides chrysalis with a comparator **(Optional)**.  The comparator is tasked with *comparing* the newly transformed data to existing data from an outside source, in order to determine if data must be updated or deleted.

- **chrysalis.setLoader (loader)** - Provides chrysalis with a loader **(Required)**.  The loader is tasked with *loading* the data into its final destination.

- **chrysalis.run()** - Run the process. Returns a promise that will resolve when the chrysalis is done.

## License

MIT © [APPrise-Mobile]()


[npm-image]: https://badge.fury.io/js/etcl.svg
[npm-url]: https://npmjs.org/package/etcl
[travis-image]: https://travis-ci.org/frankros91/etcl.svg?branch=master
[travis-url]: https://travis-ci.org/frankros91/etcl
[daviddm-image]: https://david-dm.org/frankros91/etcl.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/frankros91/etcl
