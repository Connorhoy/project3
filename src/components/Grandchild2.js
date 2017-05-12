// Include React
var React = require("react");

var Info = React.createClass({

  // Here we render the component
  render: function() {

    return (

      <div className="container">

        <div className="row">

          <div className="col-lg-12">

          <div className="panel panel-success">
            <div className="panel-heading">
              <h3 className="panel-title">Grandchild #2</h3>
            </div>
            <div className="panel-body">
              <a href="./other.html">link</a>
            </div>
          </div>

          </div>

        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Info;
