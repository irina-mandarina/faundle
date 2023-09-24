import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "../styles/fonts/fonts.css"
import "../styles/main.css"
import Layout from "../layouts/mainScreenLayout"

const SettingsPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <main>

            </main>

        </Layout>
    )
}

export default SettingsPage

export const Head: HeadFC = () => <title>Settings</title>
