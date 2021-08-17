/* eslint-disable react/display-name */
import React from 'react';

const withContext = (Provider) => (Component) => {
  return () => (
    <Provider>
      <Component />
    </Provider>
  );
};

export default withContext;
