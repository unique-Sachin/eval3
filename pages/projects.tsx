import Link from "next/link";
import React from "react";

interface elProps{
  svn_url: string;
  id: number;
  name: string;
  created_at: string;
  forks_count: number;
  stargazers_count: number;
  language: string;
}
const Projects = (props:{ projects:{items:[]}}) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Projects</h1>

      <div
        style={{
          padding: "10px",
          width: "69%",
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
        }}
      >
        {props.projects.items.map((el:elProps) => (
          <Link href={el.svn_url} key={el.id} target="_blank">
                <div
                  style={{
                    border: "1px solid",
                    textAlign: "center",
                    borderRadius: "15px",
                    margin: "15px",
                    padding: "10px",
                  }}
                >
                  <h3>{el.name}</h3>
                  <p>Created on: {el.created_at}</p>
                  <div>
                    <span>Forks:{el.forks_count}</span>
                    <span>Star:{el.stargazers_count}</span>
                  </div>
                  <h2>{el.language}</h2>
                </div>
              </Link>
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const res2 = await fetch(
    `https://api.github.com/search/repositories?q=user:${"unique-sachin"}+fork:true&sort=updated&per_page=10&type=Repositories`
  );

  const projects = await res2.json();
  return {
    props: {
      projects,
    },
  };
}

export default Projects;
