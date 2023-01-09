import Image from "next/image";
import Link from "next/link";

interface dataProps {
  avatar_url: string;
  name: string;
  bio: string;
  login: string;
  html_url: string;
}
// interface projectProps {
//   el: string[];
// }

interface elProps{
  svn_url: string;
  id: number;
  name: string;
  created_at: string;
  forks_count: number;
  stargazers_count: number;
  language: string;
}
export default function Home(props:{ data:dataProps, projects:{items:[]}}) {
  // console.log(data);
  // console.log(projects.items[0]);

  return (
    <>
      <div
        style={{
          padding: "10px",
          display: "flex",
          height: "100vh",
        }}
      >
        <div
          style={{
            width: "29%",
            display: "flex",
            flexDirection: "column",
            margin: "15px",
            padding: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              border: "1px solid",
              alignItems: "center",
              justifyContent: "space-between",
              borderRadius: "15px",
              margin: "10px",
              padding: "10px",
            }}
          >
            <Image
              style={{ borderRadius: "50%" }}
              src={props.data.avatar_url}
              width={"100"}
              height={"100"}
              alt={props.data.avatar_url}
            />
            <h2>{props.data.name}</h2>
            <p>@{props.data.login}</p>
            <p>{props.data.bio}</p>
            <div
              style={{
                padding: "10px",
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <Link
                target="_blank"
                style={{
                  padding: "10px 25px",
                  borderRadius: "20px",
                  backgroundColor: "rgb(108, 211, 149)",
                  color: "black",
                }}
                href={
                  "https://drive.google.com/file/d/1uYU19l4k_t7pBG1ad_0w-95FqybOHZI6/view?usp=share_link"
                }
              >
                Resume
              </Link>
              <Link
                target="_blank"
                style={{
                  padding: "10px 25px",
                  borderRadius: "20px",
                  backgroundColor: "rgb(108, 211, 149)",
                  color: "black",
                }}
                href={props.data.html_url}
              >
                Follow
              </Link>
            </div>
            <p style={{ width: "70%", margin: "auto" }}>
              Full-stack Developer | HTML | JavaScript | Typescript | NodeJS |
              ReactJS | CSS | Redux | MongoDB | NextJS
            </p>
          </div>
        </div>
        <div
          style={{
            width: "69%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1>Projects</h1>

          <div
            style={{
              padding: "10px",
              width: "100%",
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
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`https://api.github.com/users/${"unique-sachin"}`);
  const res2 = await fetch(
    `https://api.github.com/search/repositories?q=user:${"unique-sachin"}+fork:true&sort=updated&per_page=10&type=Repositories`
  );

  const data = await res.json();
  const projects = await res2.json();
  return {
    props: {
      data,
      projects,
    },
  };
}
