import React from 'react'
import './404.scss'
import Layout from '../components/Layout/Layout';

export default function NotFound(): React.ReactElement {

    return (
        <Layout>
            <div className="notFound">

                {/* <SEO title="Page Not Found" /> */}
                {/* <Hero
                heroImg='/images/404.jpeg'
                title='404'
            /> */}
                {/* <Wrapper> */}
                <div className="notFound__mainTitle">
                    404 Page non trouvée
                    </div>
                <div className="notFound__text">
                    Il semble que vous ayez suivi un lien rompu
                    ou que vous ayez entré une URL qui n'existe pas sur ce site.
          </div>
                {/* </Wrapper> */}
            </div>
        </Layout >
    )
}