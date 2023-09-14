import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "../styles/fonts/fonts.css"
import "../styles/main.css"
import Layout from "../layouts/mainScreenLayout"
import MainScreenButton from "../components/MainScreenButton";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <main
                className="flex flex-col w-full h-full">
                <div className="mx-auto font-jockey">
                    FAUNDLE
                </div>
                <div className="flex flex-col mx-auto">
                    <MainScreenButton
                        className="mx-auto my-4"
                        text="play" link="/play" />
                    <MainScreenButton
                        className="mx-auto my-4"
                        text="how to play" link="/how-to-play" />
                    <MainScreenButton
                        className="mx-auto my-4"
                        text="settings" link="/settings" />
                    <MainScreenButton
                        className="mx-auto my-4"
                        text="about" link="/about" />
                </div>
            </main>

        </Layout>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>Faundle</title>
