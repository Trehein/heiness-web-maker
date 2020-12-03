import React from 'react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import DynamicSkillWeb from './DynamicSkillWeb'
// import DynWebTest from './DynWebTest'

const WebController = (props) => {

    useFirestoreConnect(['nodes'])
    useFirestoreConnect(['links'])
    const nodes = useSelector((state) => state.firestore.data.nodes)
    const links = useSelector((state) => state.firestore.data.links)

    if(!nodes) {
        return (
            <div>
                Create a Node
            </div>
        )
    } else if(!links) {
        return (
            <div>
                Create a link
            </div>
        )
    } else {
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
            return data
        }

        const data = dataPack();
        const webData = JSON.parse(JSON.stringify(data))

        return (
            <DynamicSkillWeb graphData={webData} height={props.height} width={props.width} />
        )
    }
}

export default WebController