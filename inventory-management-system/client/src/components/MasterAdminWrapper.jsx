import React from 'react';
import { Route, Link } from 'react-router-dom';

const MasterAdminWrapper = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) =>
    TokenDecoder.getAdminFromToken().role === 'admin' ? (
      <Component {...props} />
    ) : (
      <Link to="/404" /> // Redirect to an unauthorized page or login page
    )
  } />
);

export default MasterAdminWrapper;