import React from "react";
import "./index.css";
import {ButtonSet} from "../../Molecules/ButtonSet/index.js";
import {TextInput} from "../../Atoms/TextInput/index.js";

export const MainParts = ({ primary, icon, children, onClick }) => {

  return(
    <div>
      <ButtonSet />
      <div>
        <TextInput />
      </div>

    </div>
  )
};
