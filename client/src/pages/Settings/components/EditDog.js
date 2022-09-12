import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EditDog() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="container my-5">
        <h1>
          <span>
            <button className="btn btn-secondary" onClick={() => navigate(-1)}>
              {" "}
              <span>&lt;</span> Back{" "}
            </button>{" "}
            Dog Settings
          </span>
        </h1>
      </div>
    </div>
  );
}