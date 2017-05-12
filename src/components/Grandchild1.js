// Include React
var React = require("react");

var Info = React.createClass({

  // Here we render the component
  render: function() {

    return (

      <div className="container">

        <div className="row">

        <div className="panel panel-warning">
          <div className="panel-heading">
            <h3 className="panel-title">Poop</h3>
          </div>
          <div className="panel-body">
            Panel content
          </div>
        </div>
      </div>
      </div>

    );
  }
});

// Export the component back for use in other files
module.exports = Info;
