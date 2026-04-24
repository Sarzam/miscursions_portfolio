import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => (
  <div className="relative min-h-screen paper grain flex items-center">
    <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
      <div className="smallcaps text-[11px] text-oxblood">Page Not Printed</div>
      <h1 className="display text-7xl md:text-9xl ink-grad leading-none mt-3">404</h1>
      <p className="display italic text-plum text-xl mt-4">
        This page didn't make the final cut of the issue.
      </p>
      <Link to="/" className="btn-editorial solid-plum mt-6 inline-flex">
        <ArrowLeft size={14} /> Back to the Cover
      </Link>
    </div>
  </div>
);

export default NotFound;
