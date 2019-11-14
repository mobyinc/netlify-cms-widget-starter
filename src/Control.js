import PropTypes from 'prop-types';
import React from 'react';
import { Map } from 'immutable';
import CMS from 'netlify-cms';

export default class Control extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    onAddAsset: PropTypes.func.isRequired,
    onRemoveAsset: PropTypes.func.isRequired,
    getAsset: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.object,
      PropTypes.bool,
    ]),
    field: PropTypes.object,
    forID: PropTypes.string,
    blocks: PropTypes.object
  }

  constructor(props) {
    super(props);

    const fieldValue = this.props.value && Map.isMap(this.props.value) ?
      this.props.value.get(this.props.field.get('name')) :
      '';

    if (!fieldValue) {
      this.state = {
        widget: null,
      };
    } else {
      this.state = {
        widget: CMS.getWidget(fieldValue),
      };
    }
  }

  handleChange = (e) => {
    this.props.onChange(Map().set(e.target.id, e.target.value));

    if (!e.target.value) {
      this.setState({
        widget: null,
      });
    } else {
      this.setState({
        widget: CMS.getWidget(e.target.value),
      });
    }
  };

  render() {
    const { field, value, forID, onChange, onAddAsset, onRemoveAsset, getAsset } = this.props;
    const { widget } = this.state;

    const name = field.get('name');
    const selectedName = `${ field.get('name') }_selected`;

    const fieldValue = this.props.value && Map.isMap(this.props.value) ?
      this.props.value.get(name || '') :
      '';

    const fieldValueSelected = this.props.value && Map.isMap(this.props.value) ?
      this.props.value.get(selectedName || '') :
      '';
    
    let options = field.get('blocks').map((option) => {
      if (typeof option === 'string') {
        return { label: option, value: option };
      }
      return option;
    });

    // start out with nothing selected
    options = options.insert(0, {
      label: 'Please Select',
      value: '',
    });

    return (
      <div>
        <div>
          <select id={forID} value={fieldValue || ''} onChange={this.handleChange}>
            {options.map((option, idx) => <option key={idx} value={option.value}>
              {option.label}
            </option>)}
          </select>
        </div>
        <div>
          {
            widget ?
              <div key={selectedName}>
                <div key={selectedName}>
                  {
                    React.createElement(widget.control, {
                      id: selectedName,
                      field,
                      value: fieldValueSelected,
                      onChange: (val, metadata) => {
                        const mapVal = (value || Map()).set(selectedName, val);
                        const hackVal = mapVal;
                        onChange(mapVal, metadata);
                      },
                      onAddAsset,
                      onRemoveAsset,
                      getAsset,
                      forID: selectedName,
                    })
                  }
                </div>
              </div>
            :
              ''
          }
        </div>
      </div>
    );
  }
}