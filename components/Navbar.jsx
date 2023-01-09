import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "30%",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "15px",
      }}
    >
      <Link href={"/"}>Sachin Mishra</Link>
      <Link href={"/projects"}>Projects</Link>
      <Link href={"/education"}>Education</Link>
    </div>
  );
};

export default Navbar;
