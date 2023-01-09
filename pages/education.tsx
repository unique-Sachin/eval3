import React from "react";

const Education = () => {
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center" }}>
      <h1>Education</h1>
      <div
        style={{
          border: "1px solid",
          width: "50%",
          textAlign: "center",
          borderRadius: "15px",
          margin: "15px 0",
          padding: "10px",
        }}
      >
        <h3>
          Full Stack Web Development ( Full Time ) <span>Masai School</span>
        </h3>
        <p>Jul 2022 – Present | Bengaluru</p>
      </div>
      <div
        style={{
          border: "1px solid",
          width: "50%",
          textAlign: "center",
          borderRadius: "15px",
          margin: "15px 0",
          padding: "10px",
        }}
      >
        <h3>
          Bachelor of Arts <span>CSJM University</span>
        </h3>
        <p>Aug 2020 – Aug 2022 | Kanpur</p>
      </div>
      <div
        style={{
          border: "1px solid",
          width: "50%",
          textAlign: "center",
          borderRadius: "15px",
          margin: "15px 0",
          padding: "10px",
        }}
      >
        <h3>
          Higher Secondary(12th)<span>St. Joseph Sr. Sec. School</span>
        </h3>
        <p>Apr 2018 – May 2020 | Jaunpur</p>
      </div>
    </div>
  );
};

export default Education;
