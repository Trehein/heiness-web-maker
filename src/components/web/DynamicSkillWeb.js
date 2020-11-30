// import React, { useState, useEffect } from 'react'
import React, { useState, useEffect } from 'react'
import { ForceGraph2D } from 'react-force-graph'

const DynamicSkillWeb = (props) => {
    // const nodeData = props.graphData.nodes

    // linkData = JSON.parse(JSON.stringify(props.graphData.links));
    // nodeData = JSON.parse(JSON.stringify(props.graphData.nodes));

    const [data, setData] = useState({ nodes: [], links: [] })

    // Object.isExtensible(graphData)

    console.log(data)
    console.log(Object.isExtensible(data));

    // console.log(graphData)

    // const copyNodes = (data) => {
    //     return data.map((item) => ({
    //         ...item
    //     }))
    // }

    // const copyLinks = (data) => {
    //     return data.map((item) => ({
    //         ...item
    //     }))
    // }
    
    // var nodeCopy = copyNodes(graphData.nodes)
    // var linkCopy = copyLinks(graphData.links)

    // const dataPack = () => {
    //     var data = {};
    //     data.nodes = nodeCopy;
    //     data.links = linkCopy;
    //     return data
    // }

    // const data = dataPack()

    // console.log(data)
    var nodeData = {}
    var linkData = {}

    useEffect(() => {
        linkData = JSON.parse(JSON.stringify(props.graphData.links));
        nodeData = JSON.parse(JSON.stringify(props.graphData.nodes));
        setData({ nodes: nodeData, links: linkData })
    }, [])

    // return (
    //     <ForceGraph2D 
    //         graphData={graphData}
    //         nodeLabel="id"
    //         nodeVal={d => d.size}
    //         nodeAutoColorBy="group"
    //         backgroundColor="black"
    //         linkColor="color"
    //         linkWidth="value"
    //         linkDirectionalParticles={d => d.value}
    //         linkDirectionalParticleSpeed={d => d.value * 0.0005}
    //     />
    // )
    return (
        <ForceGraph2D 
            graphData={data}
            nodeAutoColorBy="group"
        />
    )
}

export default DynamicSkillWeb