import React, {Component} from "react"

export const DataContext = React.createContext();
export class Context extends Component{

    state= {
        products: [
            {
                "id": 1
            }
        ]
    }
    render() {
        return(
            <div>

            </div>
        )
    }
}