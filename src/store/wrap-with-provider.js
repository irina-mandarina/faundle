import React from "react"
import { Provider } from "react-redux"

import animalStore from "./reduxWrapper"

// eslint-disable-next-line react/display-name,react/prop-types
const provider = ({ element }) => {
    // Instantiating store in `wrapRootElement` handler ensures:
    //  - there is fresh store for each SSR page
    //  - it will be called only once in browser, when React mounts
    // const store = createStore()
    return <Provider store={animalStore}>{element}</Provider>
}

export default provider
