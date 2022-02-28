import React from "react";
import "./Unchain.css";
import { UnchainPropsTypes } from "./types";

export const Unchain: React.FC<UnchainPropsTypes> = ({ openLink = true }) => {
  const onHandlerClick = () => {
    if (openLink) {
      window.open("https://unchain.fund/");
    }
  };

  return (
    <>
      <div
        onClick={onHandlerClick}
        // href="https://unchain.fund/"
        className={`em-ribbon uncha-link ${openLink && `cursor-pointer`}`}
        // style="position: fixed; left:0; top:0; width: 90px; height: 90px; background: url('https://meold.github.io/stopwar/img/stop-war-in-ukraine.png'); z-index: 10000; border: 0;"
        title="Do something to stop this war! Russians are killing our children and civilians!"
        // target="_blank"
      ></div>
    </>
  );
};
