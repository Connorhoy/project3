// Include React
var React = require("react");

var Chat = React.createClass({

  // Here we render the component
  render: function() {

    return (

      <div className="container">

      <div className="row">
      <div className="col-lg-12">
      <div className="panel panel-primary">
      <div className="panel-heading">
      <h3 className="panel-title">Child #1</h3>
      </div>
      <div className="panel-body">

      <p>
      <a href="#/child1/grandchild1" className="btn btn-warning btn-sm">Show Grandchild #1</a>
      </p>
      <div className="row">

      <div className="col-lg-12">

      <div className="container">

      {/* Added this.props.children to dump all of the child components into place */}
      {this.props.children}

      </div>
      </div>
      </div>

      </div>

      </div>
      </div>
      </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Chat;
