import React from 'react'

const WebController = (nodeData) => {
    let nodes = nodeData.nodeData
    console.log(nodes)
    // nodes.map((node) => {
    //     console.log(node)
    // })

    return (
        <div>
            <ul>
                {nodes.map((node, index) => 
                    <li key={index}>{node.id}</li>
                )}
            </ul>
        </div>
    )
}

export default WebController