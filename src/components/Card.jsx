import React from "react";

const Card = () => {
  return (
    <>
      <div
        className="card"
        style={{ width: "18rem", margin: "25px", maxHeight: "360px" }}
      >
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example </p>
          {/* <a href="/" className="btn btn-primary">Go somewhere</a> */}
          <div className="Container w-100">
            <select className="m-2 h-100 bg-success rounded">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100  bg-success rounded">
              <option value="half">Half</option>
              <option value="full">Full</option>
            </select>
            <div className="d-inline h-100 fs-5">Total price:</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
