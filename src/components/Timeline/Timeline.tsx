import "./Timeline.scss";
import { FaSuitcase } from "@react-icons/all-files/fa/FaSuitcase";
import { graphql, useStaticQuery } from "gatsby";
import React, { ReactElement } from "react";
import SectionTitle from "../SectionTitle";
import SkillImgs from "../SkillImgs";

export default function Timeline(): ReactElement {
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
      jobsJson {
        jobs {
          company
          duration
          location
          occupation
          description
          image
          projects {
            title
            description
            notes
            skills
          }
          begin {
            month
            year
          }
        }
      }
    }
  `);

  const { jobs } = data.jobsJson;
  const { edges } = data.allFile;

  interface Ijob {
    company: string;
    duration: string;
    begin: {
      month: string;
      year: string;
    };
    location: string;
    occupation: string;
    description: string;
    image: string;
    projects: {
      title: string;
      description: string;
      skills: string[];
      notes: string;
    }[];
  }

  return (
    <div className="Timeline">
      <SectionTitle icon={<FaSuitcase size={28} />} text="Éxpériences" />
      <div className="Timeline__content">
        {jobs?.map((job: Ijob, i: number) => (
          <div
            className="Timeline__content__item"
            key={`${job.begin.month}-${job.begin.year}_${i}`}
          >
            <div className="Timeline__content__marker" key={`marker-${i}`}>
              <div className="Timeline__content__marker-dot" />
              {i !== jobs.length - 1 ? (
                <div className="Timeline__content__marker-line" />
              ) : null}
            </div>
            <div className="Timeline__content__inner">
              <span className="Timeline__content__date">
                <span className="Timeline__content__month">
                  {job.begin.month}
                </span>
                <span className="Timeline__content__year">
                  {job.begin.year}
                </span>
              </span>
              <div className="Timeline__content__title">
                <div className="Timeline__content__title--big">
                  {job.occupation} chez <span>{job.company}</span>
                </div>
                <small className="Timeline__content__title--small">
                  {job.location}{" "}
                </small>
                <small className="Timeline__content__title--small timeline__content__title--right">
                  ({job.duration || "present"}){" "}
                </small>
              </div>
              <div className="Timeline__content__description">
                {<div dangerouslySetInnerHTML={{ __html: job.description }} />}
              </div>
              {job.projects?.length > 0 && (
                <div className="Timeline__content__projects">
                  <div className="Timeline__content__projects--header">
                    Projets:
                  </div>
                  <div className="Timeline__content__projects-list">
                    {job.projects?.map((project, i) => (
                      <div key={`${project?.title}_${i}`}>
                        <div className="Timeline__content__projects-title">
                          {`${project?.title}`}
                        </div>
                        <div className="Timeline__content__projects-description">
                          {
                            <div
                              dangerouslySetInnerHTML={{
                                __html: project?.description,
                              }}
                            />
                          }
                        </div>
                        <div className="Timeline__content__projects-notes">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: project?.notes,
                            }}
                          />
                        </div>
                        <div className="Timeline__content__projects-skills">
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
