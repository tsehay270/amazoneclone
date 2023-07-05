import React, { useState } from "react";
import "./Home.css";
import Product from "./Product";
import SimpleImageSlider from "react-simple-image-slider";
// import Slidingimages from "./Slidingimages";
function Home() {
  const [imageNum, setImageNum] = useState(1);

  const sliderImages = [
    {
      url: "https://m.media-amazon.com/images/I/61kbobB7CyL._SX3000_.jpg",
    },
    {
      url: "https://m.media-amazon.com/images/I/61fG6-VNLNL._SX3000_.jpg",
    },
    {
      url: "https://m.media-amazon.com/images/I/814vuMu5eLL._SX3000_.jpg",
    },
    {
      url: "https://m.media-amazon.com/images/I/71XhTkWAq6L._SX3000_.jpg",
    },
    {
      url: "https://m.media-amazon.com/images/I/61a-oRHRdfL._SX3000_.jpg",
    },
    {
      url: "https://m.media-amazon.com/images/I/71hQVwwq8kL._SX3000_.jpg",
    },
  ];
  return (
    <div className="home">
      <div className="home_container">
        {/* <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_jpg"
          alt=""
        /> */}

        <div className="home_image">
          <SimpleImageSlider
            width="100%"
            height={400}
            images={sliderImages}
            // showBullets={true}
            showNavs={true}
            autoPlay={true}
            onStartSlide={(index, length) => {
              setImageNum(index);
            }}
            autoPlayDelay={4}
          />
        </div>
        <div className="home_row">
          <Product
            id="35647816"
            title="
RealSteel Genuine Brand I Cat Garden Décor I Outdoor Garden Decorations I Landscaping Décor I Lawn Ornaments and Statues I Garden Signs Decorative Outdoor"
            price={59.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81yGQg2bp1L._AC_SX522_.jpg"
          />
          <Product
            id="19145678"
            title="Teocenka Potato Grow Bags, 10 Gallon 4 Pack Grow Bags with Handles and Harvest Window for Planting Potato Tomato and Vegetables (Black, 10)"
            price={28.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61Wm37t8HxS._AC_UL400_.jpg"
          />
          <Product
            id="51876234"
            title="Survival Seeds by Family Sown – 15,000 Non GMO Heirloom Seeds, Naturally Grown Herb Seeds & Seeds for Planting Vegetables and Fruits, Perfect Vegetable Garden Seed Starter Kit"
            price={34.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/81VNugwcBHL._AC_UL640_QL65_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="14253698"
            title="Ebotuzach 2 Packs Motion Sensor Under Cabinet Lights, 54 LED Wireless Type-C Rechargeable Kitchen Night Lights,3000K-6000K Magnetic Light Bar for Wardrobe,Cupboard,Hallways"
            price={26.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71Mbvt7-K2L._AC_SL1500_.jpg"
          />
          <Product
            id="49538094"
            title="Air Fryer Liners Disposable 100PCS-6.3 inches, Tiktok Must Have for Kitchen, Unbleached Non-Stick Baking Parchment Sheet"
            price={14.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71DypCuG5vL._AC_SX522_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="12321374"
            title="Glad Protection Series Force Flex Drawstring Fresh Clean Odor Shield 13 Gallon 1/110ct"
            price={21.76}
            rating={5}
            image="https://m.media-amazon.com/images/I/81uXwVIixJL._AC_UL400_.jpg"
          />
          <Product
            id="14253689"
            title="Hamilton Beach Classic Stand and Hand Mixer, 4 Quarts, 6 Speeds with QuickBurst, Bowl Rest, 290 Watts Peak Power, White (64655)"
            price={28.51}
            rating={5}
            image="https://m.media-amazon.com/images/I/61T2Zi9JoZL._AC_SL1500_.jpg"
          />
          <Product
            id="12345678"
            title="Wire Baskets for Organizing Household Pantry Baskets 4 Pack Pantry Baskets For Storage Metal Baskets for Pantry Storage Wire Baskets For Storage Pantry Wire Storage Baskets Black Metal Storage Bins"
            price={15.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/81cuJYeU6eL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="12564325"
            title="Samsung LC49rg90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            // "Fullstar 9-in-1 Deluxe Vegetable Chopper Kitchen Gifts | Onion Chopper & Dicer | Peeler, Spiralizer, Zoodle Maker, Lemon Squeezer, Egg Slicer & Seperator- Ultimate Kitchen Gadget"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            // "https://m.media-amazon.com/images/I/915Jnh4JIcL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="57893149"
            title="Nathan James Enloe Modern Storage, Free Standing Accent Cabinet with Doors in a Rustic Fir Wood Finish Powder-coated Metal Base for Hallway,"
            price={1486}
            rating={5}
            image="https://m.media-amazon.com/images/I/81tEqRvNKPL._AC_UL320_.jpg"
          />
          <Product
            id="14253689"
            title="Round Storage Side Table, 2-Tier End Table with Fabric Basket Gold Metal Frame, 16'' Faux Marble Top Nightstand Bedside Tables for Nursery Kids Living"
            price={225}
            rating={5}
            image="https://m.media-amazon.com/images/I/61oZGeBoNWS._AC_UL320_.jpg"
          />
          <Product
            id="12345678"
            title="Tribesigns Computer Desk, Modern Simple 47 inch Home Office Desk Study Table Writing Desk with 2 Storage Drawers, Makeup Vanity Console Table"
            price={2412}
            rating={5}
            image="https://m.media-amazon.com/images/I/51-By58eOoL._AC_UL320_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
