/*
 *
 * HomePage
 *
 */

import React from "react";
import pluginId from "../../pluginId";

const envVar = process.env.STRAPI_ADMIN_ENVVAR;

const HomePage = () => {
  return (
    <div>
      <h1>{pluginId}&apos;s HomePage</h1>
      <p>Happy coding</p>
      <p>The environment variable is {envVar}</p>
    </div>
  );
};

export default HomePage;
