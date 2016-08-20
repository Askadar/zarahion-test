var React = require('react');
var DefaultLayout = require('./layouts/default');


class HelloMessage extends React.Component {
	render() {
		return (
		<DefaultLayout title={this.props.title}>
			<div id="mounting-point">Hello, {this.props.name}</div>
		</DefaultLayout>
    	);
  }
}

module.exports = HelloMessage;