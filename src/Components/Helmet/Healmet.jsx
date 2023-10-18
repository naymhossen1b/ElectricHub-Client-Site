/* eslint-disable react/prop-types */

import { Helmet } from "react-helmet";

const Healmet = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default Healmet;