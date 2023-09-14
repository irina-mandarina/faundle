import * as React from 'react'
import {Link} from "gatsby";
import "./default.css"

class Layout extends React.Component<{ children: any }> {
    render() {
        let {children} = this.props;
        return (
            <div className="background-animation w-full h-full">
                <main className="w-full h-full">
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

