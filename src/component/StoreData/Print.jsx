import React from 'react';
import ReactToPrint from 'react-to-print';

import QrCode from './QrCode';

class Print extends React.PureComponent {
  render() {
    return (
      <div>

        <QrCode name={this.props.match.params.name} ref={el => (this.componentRef = el)} />
        <ReactToPrint
          trigger={() => {
            // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
            // to the root node of the returned component as it will be overwritten.
            return  <a href="#print">
              <button class="ui large icon button">
              <i class="print icon"></i> 
              </button>
            </a>;
          }}
          content={() => this.componentRef}
        />
      </div>
    );
  }
}

export default Print;