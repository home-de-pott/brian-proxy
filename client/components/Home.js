import React from 'react';
import { Link } from 'react-router-dom';

const Home = props => {
  return (
    <Link to={'/products/'}>
      <img
        src="https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/fetch/Homepage/Everyday-Low-Prices-dkpt-V5.jpg
			"
        alt="Everyday Low prices on millions of items. Guaranteed.*Plus Free Delivery, In-Store Returns &amp; 2-Hour Pickup – No Membership Required"
        title="Everyday Low prices on millions of items. Guaranteed.*Plus Free Delivery, In-Store Returns &amp; 2-Hour Pickup – No Membership Required"
        className="home-banner"
      ></img>
    </Link>
  );
};

export default Home;
