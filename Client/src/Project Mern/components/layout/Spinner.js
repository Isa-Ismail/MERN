import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      style={{height: '450x', width: '450px',margin: 'auto', display: 'block' }}
      alt="Loading..."
    />
  </Fragment>
);

export default Spinner;