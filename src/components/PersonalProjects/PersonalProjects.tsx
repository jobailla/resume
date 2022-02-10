import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { FaLaptopHouse, FaGithub } from "react-icons/fa";
import SectionTitle from "../SectionTitle";
import SkillImgs from "../SkillImgs";
import "./PersonalProjects.scss";

interface Ipersonal {
  title: string;
  description: string;
  skills: string[];
  notes: string;
  link: string;
}

export default function PersonalProjects(): React.ReactElement {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: { dir: { regex: "/skills_img/" } }
        sort: { fields: base }
      ) {
        edges {
          node {
            name
            publicURL
            childImageSharp {
              fluid(maxWidth: 20, quality: 75) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
      personalJson {
        projects {
          title
          description
          skills
          notes
          link
        }
      }
    }
  `);

  const { projects } = data.personalJson;
  const { edges } = data.allFile;

  return (
    <>
      <SectionTitle
        text="Projets Personnels"
        icon={<FaLaptopHouse size={28} />}
      />
      <div className="personal-projects">
        <div className="personal-projects-list">
          {projects?.map((project: Ipersonal, i: number) => (
            <div key={`${project.title}_${i}`}>
              <div className="personal-projects-title">{`${project?.title}`}</div>
              <div className="personal-projects-description">
                <div
                  dangerouslySetInnerHTML={{
                    __html: project?.description,
                  }}
                />
              </div>
              <div className="personal-projects-notes">
                <div
                  dangerouslySetInnerHTML={{
                    __html: project?.notes,
                  }}
                />
              </div>
              <div className="personal-projects-skills">
                <SkillImgs skills={project?.skills} imgs={edges} />
              </div>
              {project?.link && (
                <div className="personal-projects-link">
                  <button className="personal-projects-link-button">
                    <a
                      href={project?.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub size={18} />
                      <div className="personal-projects-link-text">Github</div>
                    </a>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
