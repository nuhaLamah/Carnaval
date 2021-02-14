import React from 'react';
import ReactToPrint from 'react-to-print';

import QrCode from './QrCode';
import NavBar from './NavBar';

class Print extends React.PureComponent {
  render() {
    return (
      <div>
        <NavBar>
          <ReactToPrint
            trigger={() => {
              // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
              // to the root node of the returned component as it will be overwritten.
              return  <a href="#print">
                <button className="ui huge basic icon button" style={{width: '50px'}}>
                <i className="print icon"></i> 
                </button>
              </a>;
            }}
            content={() => this.componentRef}
          />
        </NavBar> 
        <QrCode code={this.props.match.params.code} ref={el => (this.componentRef = el)} />
        
      </div>
    );
  }
}

export default Print;