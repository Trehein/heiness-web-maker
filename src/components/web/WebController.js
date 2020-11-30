import React, { useState, useEffect } from 'react'
import skillTree from '../../datasets/skillTree.json'
import { ForceGraph2D } from 'react-force-graph'
import DynamicSkillWeb from './DynamicSkillWeb'

const WebController = (props) => {
    // const webData = props.data
    // console.log(webData)
    const graphData = skillTree
    // var webData = JSON.parse(JSON.stringify(props.data))
    const webData = props.data
    // console.log(graphData)
    // console.log(webData)

    return (
        <DynamicSkillWeb graphData={webData} />
    )
}

export default WebController