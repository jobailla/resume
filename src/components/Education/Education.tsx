import "./Education.scss";
import { FaUniversity } from "@react-icons/all-files/fa/FaUniversity";
import { FlagIcon, FlagIconCode } from "react-flag-kit";
import { graphql, useStaticQuery } from "gatsby";
import React, { ReactElement } from "react";
import SectionTitle from "../SectionTitle";
import SkillImgs from "../SkillImgs/SkillImgs";

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
        personal {
          title
          description
          skills
          notes
          link
        }
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
        languages {
          code
          language
          level
        }
      }
    }
  `);

  const { education, languages, personal } = data.educationJson;
  const { edges } = data.allFile;

  interface Ipersonal {
    title: string;
    description: string;
    skills: string[];
    notes: string;
    link: string;
  }
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
    personal: Ipersonal;
  }

  interface Ilang {
    code: FlagIconCode;
    language: string;
    level: string;
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
              <div className="Education__edu-studies">{edu.field}</div>
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
      <div className="Education__content ">
        <ul>
          {languages.map((lang: Ilang, i: number) => (
            <li key={`${lang.code}-${i}`}>
              <div className="Education__lang">
                {lang.code && (
                  <FlagIcon
                    className="Education__lang__flag"
                    code={lang.code}
                    size={28}
                  />
                )}
                <div
                  className={lang.code ? "" : "Education__lang__text--noflag"}
                >
                  <span>{lang.language}:</span> {lang.level}.
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="Education__content">
        <div className="Education__personal-projects">
          <div className="Education__personal-projects--header">
            Projets personnels:
          </div>
          <div className="Education__personal-projects-list">
            {personal?.map((project: Ipersonal, i: number) => (
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
                <div className="Education__edu-projects-skills">
                  <SkillImgs skills={project?.skills} imgs={edges} />
                </div>
                <div className="Education__edu-projects-notes">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: project?.notes,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
