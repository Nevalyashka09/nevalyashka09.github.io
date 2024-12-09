import React, { useState } from "react";

import cake1 from "../../images/cake1.jpg";
import cake2 from "../../images/cake2.jpg";
import cake3 from "../../images/cake3.jpg";
import cake4 from "../../images/cake4.jpeg";
import cake5 from "../../images/cake5.jpg";
import cake6 from "../../images/cake6.jpg";

const Carousel: React.FC = () => {
  const [currentImage, setCurrentImage] = useState<number>(0);

  const cakes: string[] = [cake1, cake2, cake3, cake4, cake5, cake6];

  const nextImage = (): void => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % cakes.length);
  };

  const prevImage = (): void => {
    setCurrentImage(
      (prevIndex) => (prevIndex - 1 + cakes.length) % cakes.length,
    );
  };

  const getThreeImages = (): number[] => {
    const prev = (currentImage - 1 + cakes.length) % cakes.length;
    const next = (currentImage + 1) % cakes.length;
    return [prev, currentImage, next];
  };

  const [leftImage, centerImage, rightImage] = getThreeImages();

  const styles = {
    mainContainer: {
      display: "flex" as const,
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "75rem",
      position: "relative" as const,
      gap: "10px",
    },
    arrow: {
      fontSize: "2rem",
      cursor: "pointer",
      userSelect: "none" as const,
      color: "#333",
      margin: "0 50px",
    },
    imagesContainer: {
      display: "flex" as const,
      alignItems: "center",
      justifyContent: "center",
      gap: "50px",
    },
    image: {
      width: "150px",
      height: "auto",
      borderRadius: "10px",
      transition: "transform 0.3s ease",
      opacity: 0.7,
    },
    centerImage: {
      width: "300px",
      height: "auto",
      borderRadius: "10px",
      transform: "scale(1.1)",
      opacity: 1,
    },
  };

  return (
    <div style={styles.mainContainer}>
      <span style={styles.arrow} onClick={prevImage}>
        &#8592;
      </span>
      <div style={styles.imagesContainer}>
        <img
          src={cakes[leftImage]}
          alt={`Cake ${leftImage + 1}`}
          style={styles.image}
        />
        <img
          src={cakes[centerImage]}
          alt={`Cake ${centerImage + 1}`}
          style={styles.centerImage}
        />
        <img
          src={cakes[rightImage]}
          alt={`Cake ${rightImage + 1}`}
          style={styles.image}
        />
      </div>
      <span style={styles.arrow} onClick={nextImage}>
        &#8594;
      </span>
    </div>
  );
};

export default Carousel;
