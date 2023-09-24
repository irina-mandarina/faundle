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
                <div className="mx-auto font-jockey text-[90pt] p-8">
                    FAUNDLE
                </div>
                <div className="flex flex-col mx-auto justify-center w-1/8">
                    <MainScreenButton
                        text="play" link="/play" />
                    <MainScreenButton
                        text="how to play" link="/how-to-play" />
                    <MainScreenButton
                        text="settings" link="/settings" />
                    <MainScreenButton
                        text="about" link="/about" />
                </div>
            </main>

        </Layout>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>Faundle</title>
