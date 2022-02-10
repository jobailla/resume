import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { FlagIcon, FlagIconCode } from "react-flag-kit";
import "./Langs.scss";

export default function Langs(): React.ReactElement {
  interface Ilang {
    code: FlagIconCode;
    language: string;
    level: string;
  }

  const data = useStaticQuery(graphql`
    query LangsQuery {
      langJson {
        languages {
          code
          language
          level
        }
      }
    }
  `);

  const { languages } = data.langJson;

  return (
    <div className="langs">
      <ul>
        {languages.map((lang: Ilang, i: number) => (
          <li key={`${lang.code}-${i}`}>
            <div className="langs__list">
              {lang.code && (
                <FlagIcon
                  className="langs_list__flag"
                  code={lang.code}
                  size={28}
                />
              )}
              <div className={lang.code ? "" : "lang__list__text--noflag"}>
                <span>{lang.language}:</span> {lang.level}.
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
