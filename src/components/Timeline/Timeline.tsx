import "./Timeline.scss";
import { FaSuitcase } from "@react-icons/all-files/fa/FaSuitcase";
import { graphql, useStaticQuery } from "gatsby";
import React, { ReactElement } from "react";
import SectionTitle from "../SectionTitle";

export default function Timeline(): ReactElement {
  const { jobsJson } = useStaticQuery(graphql`
    {
      jobsJson {
        jobs {
          company
          duration
          location
          occupation
          description
          image
          begin {
            month
            year
          }
        }
      }
    }
  `);

  const { jobs } = jobsJson;

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
  }

  return (
    <div className="Timeline">
      <SectionTitle icon={<FaSuitcase size={28} />} text="Éxpériences" />
      <div className="Timeline__content">
        {jobs.map((job: Ijob, i: number) => (
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
                {job.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
