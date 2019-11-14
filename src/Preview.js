import React from 'react';

export default class Preview extends React.Component {
  render() {
    console.log(this.props);
    const { value } = this.props;

    return (
      <div>Content Block</div>
    )
  }
}
