import { graphql, useStaticQuery } from "gatsby";
import React, { ReactElement } from 'react';
import './Timeline.scss';
import { FaSuitcase } from 'react-icons/fa'
import Img, { FluidObject } from 'gatsby-image';

export default function Timeline(): ReactElement {
    const { jobsJson, allFile } = useStaticQuery(graphql`
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
#   allFile(filter: {dir: {regex: "/entreprise/"}}) {
#     edges {
#       node {
#          name
#          publicURL
#         childImageSharp {
#             fluid(maxWidth: 100 quality: 100) {
#               ...GatsbyImageSharpFluid_tracedSVG
#             }
#         }
#       }
#     }
#   }
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
        image: string;
    }

    // const logos = allFile.edges
    
    // const style = {
    //   width: "65px",
    //   height: "65px",
    //   borderRadius: "100%",
    // };

    // const findLogo = (images: string[], imageName: string): FluidObject => {
    //     const img = images.find((img) => img.node.name === imageName)
    //     return (img?.node.childImageSharp.fluid)
    // }


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
                        <div className="Timeline__content__item" key={`${job.begin.month}-${job.begin.year}_${i}`} >
                            <div className="Timeline__content__marker" key={`marker-${i}`} >
                                <div className="Timeline__content__marker-dot" >
                                    {/* <Img  fluid={findLogo(logos, jobs[i].image)} style={style}/> */}
                                    </div>
                                {
                                    i !== jobs.length - 1 ?
                                        <div className="Timeline__content__marker-line" /> : null
                                }
                            </div>
                            <div className="Timeline__content__inner">
                                <span className="Timeline__content__date">
                                    <span className="Timeline__content__month">{job.begin.month}</span>
                                    <span className="Timeline__content__year">{job.begin.year}</span>
                                </span>
                                <div className="Timeline__content__title">
                                    {job.occupation} chez {job.company}
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
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
