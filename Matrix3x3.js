import React, { useState } from "react";

const Matrix3x3 = () => {
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  const [clicked, setClicked] = useState(Array(9).fill(false));
  const [clickOrder, setClickOrder] = useState([]);
  const [colors, setColors] = useState(Array(9).fill("#f0f0f0"));

  const handleClick = (index) => {

    if (clicked[index]) return;

    const newClicked = [...clicked];
    newClicked[index] = true;

    const newClickOrder = [...clickOrder, index];

    
    const newColors = [...colors];
    newColors[index] = "green";

    setClicked(newClicked);
    setClickOrder(newClickOrder);
    setColors(newColors);


    if (newClickOrder.length === 9) {
      newClickOrder.forEach((clickedIndex, i) => {
        setTimeout(() => {
          setColors((prevColors) => {
            const updated = [...prevColors];
            updated[clickedIndex] = "orange";
            return updated;
          });
        }, i * 300); 
      });
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2> Edxso 3x3 Matrix (Last Click = Orange Sequence)</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 60px)",
          gap: "10px"
        }}
      >
        {matrix.flat().map((value, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            style={{
              width: "60px",
              height: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: colors[index],
              color: colors[index] === "#f0f0f0" ? "black" : "white",
              border: "1px solid #ccc",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Matrix3x3;
