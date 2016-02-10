import React from 'react';


class Master extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return ( 
      <div className="container">
        <div className="navbar navbar-default">
          <ul className="nav navbar-nav">
            
          </ul>
        </div>
        {this.props.children}
      </div>
    );
  }
}


export default Master;