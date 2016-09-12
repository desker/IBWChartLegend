import React from 'react';
import './ibwchartlegend.scss';


export default React.createClass({
  propTypes: {
    items: React.PropTypes.array
  },

  getDefaultProps: function() {
    return {
      items: [
        {
          value: '<16',
          text: 'Выраженный дефицит массы тела',
          width: 50,
          color: '#e74c3c'
        }, {
          value: '16−18.4',
          text: 'Недостаточная масса тела',
          width: 65,
          color: '#f1c40f'
        }, {
          value: '18.5−24.9',
          text: 'Нормальная масса тела',
          width: 80,
          color: '#2ecc71'
        }, {
          value: '25−29.9',
          text: 'Избыточная масса тела',
          width: 90,
          color: '#f1c40f'
        }, {
          value: '30−34.9',
          text: 'Ожирение 1 степени',
          width: 100,
          color: '#e74c3c'
        }, {
          value: '35−39.9',
          text: 'Ожирение 2 степени',
          width: 110,
          color: '#c0392b'
        }, {
          value: '40 и более',
          text: 'Ожирение 3 степени',
          width: 115,
          color: '#8e44ad'
        }, {
          value: '',
          text: 'Нормальная масса с учётом типа телосложения',
          width: 50,
          color: '#3498db'
        }
      ]
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
      <div className="mzr-ibm-legend-text">{item.text}</div>
    </div>
  },

  render: function() {
    var items = this.props.items;

    return <div className="mzr-ibm-legend">
      {items.map(this.renderItem, this)}
    </div>;
  }
});
