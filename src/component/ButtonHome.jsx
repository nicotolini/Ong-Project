import React from "react";
import { Link } from "react-router-dom";

export const ButtonHome = () => {
  return (
    <div className="flex items-center">
      <Link to="/" className="flex items-center gap-4">
      <img src="https://icongr.am/fontawesome/paper-plane-o.svg?size=43&color=ffffff" alt="search-icon" className="w-12" />
      <h3 className="text-3xl text-white-100">Job Dev</h3>
      </Link>
    </div>
  );
};
