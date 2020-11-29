import React, { useState, useEffect } from 'react'
import skillTree from '../../datasets/skillTree.json'
import { ForceGraph2D } from 'react-force-graph'

const WebController = (props) => {
    const webData = props.data
    // console.log(webData)
    const graphData = skillTree

    return (
        <ForceGraph2D 
            graphData={graphData}
            nodeLabel="id"
            nodeVal={d => d.size}
            nodeAutoColorBy="group"
            backgroundColor="black"
            linkColor="color"
            linkWidth="value"
            linkDirectionalParticles={d => d.value}
            linkDirectionalParticleSpeed={d => d.value * 0.0005}
        />
    )
}

export default WebController