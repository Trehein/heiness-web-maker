// import React, { useState, useEffect } from 'react'
import React, { useState, useEffect, useRef, useMemo } from 'react'
import { ForceGraph2D } from 'react-force-graph'

const DynamicSkillWeb = (props) => {
    const cache = useRef(props.graphData);
    const [data, setData] = useState({ nodes: [], links: [] })
    // console.log(data)

    // var nodeData = {}
    // var linkData = {}
    const nodeData = useMemo(() => JSON.parse(JSON.stringify(props.graphData.nodes)), [props.graphData.nodes])
    const linkData = useMemo(() => JSON.parse(JSON.stringify(props.graphData.links)), [props.graphData.links])
    // linkData = JSON.parse(JSON.stringify(props.graphData.links));
    // nodeData = JSON.parse(JSON.stringify(props.graphData.nodes));
    
    useEffect(() => {
        const prevData = cache.current;
        if (prevData !== cache) {
            setData({ nodes: nodeData, links: linkData })
        }
        cache.current = props.graphData;
    }, [linkData, nodeData, props.graphData])

    return (
        <ForceGraph2D 
            graphData={data}
            nodeAutoColorBy="group"
        />
    )
}

export default DynamicSkillWeb