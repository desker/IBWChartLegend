import React from 'react';
import './ibwchartlegend.scss';


export default React.createClass({
  propTypes: {
    items: React.PropTypes.array
  },

  getDefaultProps: function() {
    return {
      items: []
    };
  },

  renderItem(item, i) {
    return <div className="mzr-ibm-legend-item">
      <div
        className="mzr-ibm-legend-block"
        style={{
          width: item.width,
          background: item.color
        }}
      >
        {item.value}
      </div>
      <div className={`mzr-ibm-legend-text ${item.selected && 'mzr-ibm-legend-text_selected'}`}>{item.text}</div>
    </div>
  },

  render: function() {
    var items = this.props.items;

    return <div className="mzr-ibm-legend">
      {items.map(this.renderItem, this)}
    </div>;
  }
});
