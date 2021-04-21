import React, { ReactElement } from 'react'
import './Education.scss'
import { FaUniversity } from 'react-icons/fa'
import { FlagIcon, FlagIconCode } from 'react-flag-kit'
import { useStaticQuery, graphql } from "gatsby"

export default function Education(): ReactElement {

    const data = useStaticQuery(graphql`
    {
      educationJson {
        education {
          degree
          school
          field
          startYear
          endYear
        }
       languages {
         code
         language
         level
        }
      }
    }
  `)


    const { education, languages } = data.educationJson

    interface Iedu {
        degree: string;
        school: string;
        field: string;
        startYear: string;
        endYear: string;
    }

    interface Ilang {
        code: FlagIconCode;
        language: string;
        level: string;
    }

    return (
        <div className="Education">
            <div className="Education__title">
                <FaUniversity size={28} />
                <div className="Education__title__description">
                    Études
                </div>
            </div>
            <div className="Education__content">
                {
                    education.map((edu: Iedu, i: number) => (
                        <div key={`${edu.school}_${i}`} >
                            <div className="Education__edu">
                                <div className="Education__edu-header">
                                    <span className="Education__edu-school">{edu.school}</span>
                                    <span className="Education__edu-date">
                                        {edu.startYear} - {edu.endYear || 'Present'}
                                    </span>
                                </div>
                                <span className="Education__edu-studies">
                                    {edu.field}
                                </span>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="Education__content ">
                {
                    languages.map((lang: Ilang, i: number) => (
                        <ul key={`${lang.code}-${i}`}>
                            <div className="Education__lang">
                                {lang.code && (
                                    <FlagIcon
                                        className="Education__lang__flag"
                                        code={lang.code}
                                        size={28}
                                    />
                                )}
                                <div
                                    className={lang.code ? '' : 'Education__lang__text--noflag'}>
                                    <strong>{lang.language}:</strong> {lang.level}.
                    </div>
                            </div>
                        </ul>
                    ))
                }
            </div>
        </div>
    )
}
