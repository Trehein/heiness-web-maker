import React from 'react'
import { ForceGraph2D } from 'react-force-graph'

const DynamicSkillWeb = (props) => {

    return (
        <ForceGraph2D 
            graphData={props.graphData}
            nodeAutoColorBy="group"
        />
    )
}

export default DynamicSkillWeb