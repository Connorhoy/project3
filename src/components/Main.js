// Include React
var React = require("react");

var Main = React.createClass({

  // Here we render the component
  render: function() {

    return (
      
      <div className="container">
      
    		

        <div className="row">

          <div className="col-lg-12">

            <div className="container">

              {/* Added this.props.children to dump all of the child components into place */}
              {this.props.children}

            </div>
          </div>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
