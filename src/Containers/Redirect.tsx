import React from "react";
import queryString from "query-string";

const Redirect = (props: any) => {
  const { code, state } = queryString.parse(props.location.search);
  return <div>redirect page</div>;
};

export default Redirect;
