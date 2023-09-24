import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "../styles/fonts/fonts.css"
import "../styles/main.css"
import Layout from "../layouts/mainScreenLayout"
import MainScreenButton from "../components/MainScreenButton";

const HowToPlayPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <main>

            </main>

        </Layout>
    )
}

export default HowToPlayPage

export const Head: HeadFC = () => <title>How to play</title>
