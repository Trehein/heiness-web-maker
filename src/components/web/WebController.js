import React from 'react'

const WebController = (props) => {
    const webData = props.data
    console.log(webData)

    return (
        <div>
            <ul>
                {/* {data.nodes.map((node, index) => 
                    <li key={index}>{node.id}</li>
                )} */}
            </ul>
        </div>
    )
}

export default WebController