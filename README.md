# IBWChartLegend

Get the AMD module located at `ibwchartlegend.js` and include it in your project.

Here is a sample integration:

```js
require.config({
  paths: {
    'react': 'vendor/bower_components/react/react',
    'IbwchartLegend': 'ibwchartlegend'
  }
});

require(['react', 'IbwchartLegend'], function(React, IbwchartLegend) {

  React.render(React.createElement(IbwchartLegend), document.getElementById('widget-container'));

});
```

## Development

* Development server `npm start`.
* Continuously run tests on file changes `npm run watch-test`;
* Run tests: `npm test`;
* Build `npm run build`;
