import React from 'react'
import DynamicSkillWeb from './DynamicSkillWeb'

const WebController = (props) => {
    var webData = JSON.parse(JSON.stringify(props.data))

    return (
        <DynamicSkillWeb graphData={webData} />
    )
}

export default WebController