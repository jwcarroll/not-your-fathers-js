const React = require('react');

export default class RawHtml extends React.Component {

  constructor() {
    super();
  }

  render() {
    const { html } = this.props;

    return (
      <div dangerouslySetInnerHTML={{__html: html}}></div>
    );
  }
}