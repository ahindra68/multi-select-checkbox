import React, { useState } from "react";
import Multiselect from "multiselect-react-dropdown";

const Checkbox = () => {
  const [fruit, setFruit] = useState([
    "Apple",
    "Mango",
    "orange",
    "Grape",
    "Banana",
    "Pineapple",
    "Watermelon",
    "Papaya",
    "kiwi",
    "Cherry",
    "Strawberry",
    "Pear",
    "Lemon",
    "Pomegranate",
    "Apricot",
    "Fig",
    "Peach",
    "Jackfruit",
    "Avocado",
    "Plum",
    "Grapefruit",
    "Guava",
    "Muskmelon",
    "Blueberry",
    "Coconut",
    "Dragonfruit",
    "Cucumber",
  ]);
  return (
    <>
      <Multiselect
        isObject={false}
        onRemove={(e) => {
          console.log(e);
        }}
        onSelect={(e) => {
          console.log(e);
        }}
        options={fruit}
        selectedValues={["Select Fruits :"]}
        showCheckbox
      />
    </>
  );
};

export default Checkbox;
