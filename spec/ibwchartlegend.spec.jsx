import React from 'react/addons';
import IbwchartLegend from '../lib/ibwchartlegend.jsx';

describe('IbwchartLegend', function() {
  var component;

  beforeEach(function() {
    component = React.addons.TestUtils.renderIntoDocument(
      <IbwchartLegend/>
    );
  });

  it('should render', function() {
    expect(component.getDOMNode().className).toEqual('ibwchartlegend');
  });
});
