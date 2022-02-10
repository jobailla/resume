import { FaUniversity } from "@react-icons/all-files/fa/FaUniversity";
import { graphql, useStaticQuery } from "gatsby";
import React, { ReactElement } from "react";
import { FlagIcon, FlagIconCode } from "react-flag-kit";
import SectionTitle from "../SectionTitle";
import SkillImgs from "../SkillImgs/SkillImgs";
import "./Education.scss";

export default function Education(): ReactElement {
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
      educationJson {
        education {
          degree
          school
          field
          startYear
          endYear
          projects {
            title
            description
            skills
            notes
          }
        }
      }
    }
  `);

  const { education, languages, personal } = data.educationJson;
  const { edges } = data.allFile;

  interface Iedu {
    degree: string;
    school: string;
    field: string;
    startYear: string;
    endYear: string;
    projects: {
      title: string;
      description: string;
      skills: string[];
      notes: string;
    }[];
  }

  return (
    <div className="Education">
      <SectionTitle icon={<FaUniversity size={28} />} text="Études" />
      <div className="Education__content">
        {education?.map((edu: Iedu, i: number) => (
          <div key={`${edu.school}_${i}`}>
            <div className="Education__edu">
              <div className="Education__edu-header">
                <span className="Education__edu-school">{edu.school}</span>
                <div className="Education__edu-date">
                  {edu.startYear} - {edu.endYear || "Present"}
                </div>
              </div>
              <div className="Education__edu-studies">
                <div
                  dangerouslySetInnerHTML={{
                    __html: edu?.field,
                  }}
                />
              </div>
              {edu.projects?.length > 0 && (
                <div className="Education__edu-projects">
                  <div className="Education__edu-projects--header">
                    Projets:
                  </div>
                  <div className="Education__edu-projects-list">
                    {edu.projects?.map((project, i) => (
                      <div key={`${project.title}_${i}`}>
                        <div className="Education__edu-projects-title">
                          {`${project?.title}`}
                        </div>
                        <div className="Education__edu-projects-description">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: project?.description,
                            }}
                          />
                        </div>
                        <div className="Education__edu-projects-notes">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: project?.notes,
                            }}
                          />
                        </div>
                        <div className="Education__edu-projects-skills">
                          <SkillImgs skills={project?.skills} imgs={edges} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
