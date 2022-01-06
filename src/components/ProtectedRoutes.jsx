import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
// import { Redirect } from "react-router-dom";

const ProtectedRoutes = ({
  userData,
  children,
  location,

  component: Component,
  rest,
}) => {
  const isLoggedIn = userData;
  const [auth, setAuth] = useState();

  useEffect(() => {
    setAuth(userData);
  }, [userData]);

  return (
    <div>
      <Route
        {...rest}
        render={(props) => {
          if (userData) {
            return <Component {...props} />;
          } else {
            <Redirect to={{ pathname: "/signup", state: props.location }} />;
          }
        }}
      />
      {/* <Route
        render={(props) =>
          isLoggedIn ? <Outlet /> : <Navigate to="/signup" />
        }
      /> */}
    </div>
  );
};
const mapStateToProps = (state) => {
  // console.log("state in protected route", state);
  return {
    userData: state.login?.login?.success,
  };
};
export default connect(mapStateToProps)(withRouter(ProtectedRoutes));
