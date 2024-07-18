import React from 'react';
import { Route, Link } from 'react-router-dom';

const BranchAdminWrapper = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) =>
    TokenDecoder.getAdminFromToken().role === 'branch_user' ? (
      <Component {...props} />
    ) : (
      <Link to="/404" /> // Redirect to an unauthorized page or login page
    )
  } />
);

export default BranchAdminWrapper;