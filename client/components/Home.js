import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import urls from '../config';
import appendScript from '../utils/appendScript';
// import ProductThumbnail from 'product-thumbnail';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // window.addEventListener('getProduct', event => {
    //   console.log('Getting', event.detail.id);
    //   window.location.history.push('/products/' + event.detail.id);
    // });
    appendScript(urls.carouselUrl + '/bundle.js');
    // appendScript('http://localhost:3000/bundle.js')
  }
  render() {
    return (
      <>
        <Link to={'/products/'}>
          <img
            src="https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/fetch/Homepage/Everyday-Low-Prices-dkpt-V5.jpg
                    "
            alt="Everyday Low prices on millions of items. Guaranteed.*Plus Free Delivery, In-Store Returns &amp; 2-Hour Pickup – No Membership Required"
            title="Everyday Low prices on millions of items. Guaranteed.*Plus Free Delivery, In-Store Returns &amp; 2-Hour Pickup – No Membership Required"
            className="home-banner"
          ></img>
        </Link>
        <div>
          <h2 className="home__section">
            <span className="home__section-title">More Ways to Save...</span>
          </h2>
          <div className="home__flex-images">
            <div className="home__flex-item">
              <img
                src="https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/fetch/FetchRules/Partial/0715-PSS-2.jpg
                    "
                alt="Pack. Store. Save"
                title="Pack. Store. Save"
                className="home__flex-image"
              />
              <a className="" href="/products">
                Keep your space tidy &amp; save
              </a>
            </div>
            <div className="home__flex-item">
              <img
                src="https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/fetch/FetchRules/Partial/Appliances-2019q2-Square-prime.jpg
                    "
                alt="Appliances"
                title="Appliances"
                className="home__flex-image"
              ></img>
              <a className="" href="/products">
                Up to 30% Off with Appliance Special Buys**
              </a>
            </div>
            <div className="home__flex-item">
              <img
                src="https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/fetch/FetchRules/Partial/0715-B2C-2.jpg
                    "
                alt="Back To Campus"
                title="Back To Campus"
                className="home__flex-image"
              ></img>
              <a className="" href="/products">
                Savings on Select Back to Campus Must-haves
              </a>
            </div>
            <div className="home__flex-item">
              <img
                src="https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/fetch/FetchRules/Partial/decor-hp.jpg
                    "
                className="home__flex-image"
              ></img>
              <a className="" href="/products">
                Up To 30% Off Select Home Decore &amp; Furniture
              </a>
            </div>
          </div>
          <div id="carousel"></div>
        </div>
      </>
    );
  }
}

export default Home;
