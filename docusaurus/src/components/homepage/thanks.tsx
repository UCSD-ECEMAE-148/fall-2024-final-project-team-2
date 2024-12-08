import clsx from "clsx";
import React, { FunctionComponent } from "react";
import useBaseUrl from '@docusaurus/useBaseUrl'; // Import Docusaurus base URL hook

import styles from "./Hero.module.scss";

export const Hero: FunctionComponent = () => {
  const backgroundImage = "https://ucsd-ecemae-148.github.io/markdown-documentation/robocarportrait.jpg"; // Get the correct path for the image

  return (
    <header 
      className={clsx("hero hero--primary", styles.heroBanner)} 
      style={{ backgroundImage: `url(${backgroundImage})` }} // Add inline background image
    >
      <div className="container">
        <h1 className={clsx("hero__title", styles.title)}>
          Special Thanks To Teaching Staff
          <br />
          <span>ECE 148, Fall 2024 @ UCSD</span>
        </h1>
      </div>
    </header>
  );
};