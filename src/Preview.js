import React from 'react';

export default class Preview extends React.Component {
  render() {
    const { value } = this.props;

    return (
      <div>
        { value ? value['val'] : '' }
      </div>
    )
  }
}
