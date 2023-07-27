import React, { useEffect, useState } from "react";
import { Widget } from "near-flipside-vm";
import { useParams } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";

export default function ViewPage(props) {
  return (
    <div className="container-xl">
      <div className="row">
        <div
          className="d-inline-block position-relative overflow-hidden"
          style={{
            "--body-top-padding": "24px",
            paddingTop: "var(--body-top-padding)",
          }}
        >
          <p>TBD</p>
        </div>
      </div>
    </div>
  );
}
