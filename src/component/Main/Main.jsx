import React, { useEffect } from "react";
import "./main.scss";
// import Icons
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
// Import the images
import img from "../../assets/Iphone13.jpg";
import img2 from "../../assets/galaxyS9.jpg";
import img3 from "../../assets/TecnoSpark10.jpeg";
import img4 from "../../assets/InfinixNote10.jpeg";
import img5 from "../../assets/HuaweiP50Pro.jpeg";
import img6 from "../../assets/Iphone11ProMax.jpg";
import img7 from "../../assets/galaxyS9.webp";
import img8 from "../../assets/NokiaX20.jpg";
import img9 from "../../assets/Pixel5.jpg";

// import animination
import Aos from "aos";
import "aos/dist/aos.css";
// Maped Out Array
const Data = [
  {
    id: 1,
    imgScr: img,
    destTitle: "Iphone 13",
    location: "DroineTech",
    grade: "New Product",
    fees: "$899",
    description:
      "The iPhone 13 is Apple's latest smartphone, featuring an A15 Bionic chip, improved cameras, 5G connectivity, longer battery life, and a brighter Super Retina XDR display. It's available in four models: iPhone 13 mini, iPhone 13, iPhone 13 Pro, and iPhone 13 Pro Max.",
  },
  {
    id: 2,
    imgScr: img2,
    destTitle: " Galaxy Note 10",
    location: "Shoprite",
    grade: "Belgium Product",
    fees: "$949",
    description:
      "The Samsung Galaxy Note 10, released in August 2019, features a 6.3-inch Dynamic AMOLED display, Snapdragon 855 processor, 8GB of RAM, and a triple camera setup with a 12MP wide, 12MP telephoto, and 16MP ultrawide lens. It also includes an S Pen stylus.",
  },
  {
    id: 3,
    imgScr: img3,
    destTitle: "Tecno Spark 10",
    location: "DroineTech",
    grade: "New Product",
    fees: "$129",
    description:
      "The Tecno Spark 10, released in September 2021, features a 6.5-inch IPS LCD display, Helio G85 processor, 4GB of RAM, and a quad-camera setup with a 16MP main lens. It also includes a 5000mAh battery and runs on Android 11.",
  },
  {
    id: 4,
    imgScr: img4,
    destTitle: "Infinix Note 10",
    location: "Ogbete Market",
    grade: "Belgium Product",
    fees: " $199",
    description:
      "The Infinix Note 10, released in May 2021, features a 6.95-inch IPS LCD display, Helio G85 processor, 4GB/6GB of RAM, and a quad-camera setup with a 48MP main lens. It also includes a 5000mAh battery and runs on Android 11 with XOS 7.6.",
  },
  {
    id: 5,
    imgScr: img5,
    destTitle: "Huawei P50 Pro",
    location: "Ogbete Market",
    grade: "New Product",
    fees: "$1200",
    description:
      "Huawei's latest smartphone was the P50 Pro, which was released in July 2021. It features a 6.6-inch OLED display, Kirin 9000 processor, 8GB/12GB of RAM, and a quad-camera setup with a 50MP main lens.",
  },
  {
    id: 6,
    imgScr: img6,
    destTitle: "Iphone 11 pro max",
    location: "Ogbete Market",
    grade: "New Product",
    fees: "$1099",
    description:
      "The iPhone 11 pro max, released in October 2020, features a 6.1-inch Super Retina XDR OLED display, A14 Bionic chip, 4GB of RAM, and a dual-camera setup with a 12MP wide and 12MP ultrawide lens. It also includes 5G connectivity and MagSafe technology for wireless charging.",
  },
  {
    id: 7,
    imgScr: img7,
    destTitle: "Galaxy S9",
    location: "Droine Tech",
    grade: "New Product",
    fees: "$300",
    description:
      "The Samsung Galaxy S9, released in March 2018, features a 5.8-inch Super AMOLED display, Snapdragon 845 processor, 4GB of RAM, and a single 12MP camera with variable aperture. It also includes a 3000mAh battery and runs on Android 10 with Samsung's One UI 2.0.",
  },
  {
    id: 8,
    imgScr: img8,
    destTitle: "Nokia X20",
    location: "Shoprite",
    grade: "New Product",
    fees: "$349",
    description:
      "the Nokia X20, released in April 2021. It features a 6.67-inch IPS LCD display, Snapdragon 480 processor, up to 8GB of RAM, and a quad-camera setup with a 64MP main lens. It also includes a 4470mAh battery and runs on Android 11 with Nokia's My UX.",
  },
  {
    id: 9,
    imgScr: img9,
    destTitle: "Pixel 5",
    location: "Ogbete Market",
    grade: "New Product",
    fees: "$699",
    description:
      "the Pixel 5, released in October 2020. It features a 6.0-inch OLED display, Snapdragon 765G processor, 8GB of RAM, and a dual-camera setup with a 12.2MP main lens. It also includes 5G connectivity and runs on Android 11.",
  },
];

const Main = () => {
  // Scroll animination

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most Wanted Products
        </h3>
      </div>
      <div className="secContainer grid">
        {Data.map(
          ({ id, imgScr, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos="fade-up" className="singleProduct">
                <div className="imageDiv">
                  <img src={imgScr} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="location flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>
                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button className="btn flex">
                    DEATAILS
                    <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
