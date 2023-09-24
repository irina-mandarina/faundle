import * as React from 'react'
import {Link} from "gatsby";
import "./gradient.css"

class Layout extends React.Component<{ children: any }> {
    render() {
        let {children} = this.props;
        return (
            <div className="relative w-full h-full"
            style={{
                backgroundImage: "linear-gradient(45deg, #0B132B 30%, #1C7C54)",
                zIndex: -2
            }}>
                <div id="animated-gradient-mask">
                </div>
                <main className="w-full h-full z-100">
                    {children}
                </main>
                <Link
                    to="/"
                    className="font-staatliches text-md"
                    style={{ top: 6, right: 6, position: "absolute" }}>
                    menu
                </Link>

            </div>
        )
    }
}

export default Layout

