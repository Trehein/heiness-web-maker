// import React, { useState, useEffect } from 'react'
import React, { useState, useEffect, useRef } from 'react'
import { ForceGraph2D } from 'react-force-graph'

const DynamicSkillWeb = (props) => {
    const cache = useRef(props.graphData);
    const [data, setData] = useState({ nodes: [], links: [] })
    console.log(data)



    useEffect(() => {
        var nodeData = {}
        var linkData = {}
        linkData = JSON.parse(JSON.stringify(props.graphData.links));
        nodeData = JSON.parse(JSON.stringify(props.graphData.nodes));
        setData({ nodes: nodeData, links: linkData })

        cache.current = props.graphData;

    }, [props.graphData.links, props.graphData.nodes, props.graphData])

    return (
        <ForceGraph2D 
            graphData={data}
            nodeAutoColorBy="group"
        />
    )
}

export default DynamicSkillWeb