import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "../styles/fonts/fonts.css"
import "../styles/main.css"
import Layout from "../layouts/mainScreenLayout"

const AboutPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <main>

            </main>

        </Layout>
    )
}

export default AboutPage

export const Head: HeadFC = () => <title>About</title>
