const React = require('react');

export default class RawHtml extends React.Component {

  constructor() {
    super();
  }

  render() {
    const { html, customStyle, style, ...rest } = this.props;

    return (
      <div style={{...customStyle, ...style}} {...rest}>
        <div dangerouslySetInnerHTML={{__html: html}}></div>
      </div>
    );
  }
}
