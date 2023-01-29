import React from 'react';
import ContentLoader from 'react-content-loader';

const PizzaSkeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="140" cy="128" r="125" />
    <rect x="0" y="269" rx="5" ry="5" width="280" height="27" />
    <rect x="0" y="310" rx="5" ry="5" width="280" height="88" />
    <rect x="0" y="415" rx="5" ry="5" width="90" height="30" />
    <rect x="128" y="412" rx="25" ry="25" width="150" height="45" />
  </ContentLoader>
);

export default PizzaSkeleton;
