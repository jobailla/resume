import { graphql, useStaticQuery } from "gatsby";
import React, { ReactElement } from 'react';
import './Timeline.scss';
import { FaSuitcase } from 'react-icons/fa'

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
          begin {
            month
            year
          }
        }
      }
    }
  `)

    const { jobs } = jobsJson

    interface Ijob {
        company: string;
        duration: string;
        begin: {
            month: string;
            year: string;
        }
        location: string;
        occupation: string;
        description: string;
    }

    return (
        <div className="Timeline">
            <div className="Timeline__title">
                <FaSuitcase size={28} />
                <div className="Timeline__title__description">
                    Éxpériences
                </div>

            </div>

            <div className="Timeline__content">
                {
                    jobs.map((job: Ijob, i: number) => (
                        <article
                            key={`${job.begin.month}-${job.begin.year}_${i}`}
                            className="Timeline__content__item">
                            <div className="Timeline__content__marker" key={`marker-${i}`} >
                                {
                                    i !== jobs.length - 1 ?
                                        <div className="Timeline__content__marker-line" /> : null
                                }
                            </div>
                            <div className="inner">
                                <span className="Timeline__content__date">
                                    <span className="Timeline__content__month">{job.begin.month}</span>
                                    <span className="Timeline__content__year">{job.begin.year}</span>
                                </span>
                                <div className="Timeline__content__title">
                                    {job.occupation} chez {job.company} <br />
                                    <small className="Timeline__content__title--small">
                                        {job.location}{' '}
                                    </small>
                                    <small className="Timeline__content__title--small timeline__content__title--right">
                                        ({job.duration || 'present'}) </small>
                                </div>
                                <div className="Timeline__content__description">
                                    {job.description}
                                </div>
                            </div>
                        </article>
                    ))
                }
            </div>
        </div>
    )
}
