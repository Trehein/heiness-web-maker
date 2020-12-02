import React, { useState, useEffect, useRef, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import { ForceGraph2D } from 'react-force-graph'

const DynWebTest = () => {
    useFirestoreConnect(['nodes'])
    useFirestoreConnect(['links'])
    const nodes = useSelector((state) => state.firestore.data.nodes)
    const links = useSelector((state) => state.firestore.data.links)

    const [data, setData] = useState({ nodes: [], links: [] })

    useEffect(() => {
        var nodeArray = [];
        Object.keys(nodes).forEach((key) => {
            var newObj = {};
            newObj = nodes[key];
            nodeArray.push(newObj);
        })
        var linkArray = [];
        Object.keys(links).forEach((key) => {
            var newObj = {};
            newObj = links[key];
            linkArray.push(newObj);
        })

        const dataPack = () => {
            var data = {};
            data.nodes = nodeArray;
            data.links = linkArray;
            return JSON.parse(JSON.stringify(data))
        }

        const data = dataPack()
        setData(data)
    }, [nodes, links])

    return (
        <ForceGraph2D 
            graphData={data}
            nodeAutoColorBy="group"
        />
    )
}

export default DynWebTest
