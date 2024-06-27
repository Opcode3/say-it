import React from "react";
import { Helmet } from "react-helmet";

interface MetaHeadType {
  title: string;
}
const MetaHead = ({ title }: MetaHeadType) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta
        name="description"
        content="This is a description for search engines"
      />
      <meta name="keywords" content="react, seo, metadata" />
    </Helmet>
  );
};

export default MetaHead;
