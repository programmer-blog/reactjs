/*** PARCEL Bundler
 * HDR - Hot Module Replacement
 * Fule Watcher Algorithm - C++
 * BUNDLING
 * MINIFY
 * Dev and Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching While Development 
 * Compression
 * Compatible with older version of browsers
 * add --https in from for nxp parcel index.html --https to run it locally as https on dev
 * port number
 * Consistant Hashing Algo
 * Zero Config
 * 
 */
import React from "react";
import ReactDOM from "react-dom/client";


const heading = React.createElement("h1", { "id": "title" }, "Learning React");

const heading2 = React.createElement("h2", { "id": "title" }, "Heading 2");

const container = React.createElement(
    "div",
    { id: "container" },
    [heading, heading2]
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);