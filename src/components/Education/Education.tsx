import "./Education.scss";
import { FaUniversity } from "@react-icons/all-files/fa/FaUniversity";
import { FlagIcon, FlagIconCode } from "react-flag-kit";
import { graphql, useStaticQuery } from "gatsby";
import React, { ReactElement } from "react";
import SectionTitle from "../SectionTitle";

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
  `);

  const { education, languages } = data.educationJson;

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
      <SectionTitle icon={<FaUniversity size={28} />} text="Études" />
      <div className="Education__content">
        {education.map((edu: Iedu, i: number) => (
          <div key={`${edu.school}_${i}`}>
            <div className="Education__edu">
              <div className="Education__edu-header">
                <span className="Education__edu-school">{edu.school}</span>
                <div className="Education__edu-date">
                  {edu.startYear} - {edu.endYear || "Present"}
                </div>
              </div>
              <div className="Education__edu-studies">{edu.field}</div>
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
    </div>
  );
}
