import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useFirestore, useFirestoreConnect } from 'react-redux-firebase'
import WebController from '../web/WebController'
import CreateNodeForm from './CreateNodeForm'

const Dashboard = () => {
    const [createNode, setCreateNode] = useState({
        id: '',
        group: '',
        color: '',
        size: 0,
        type: ''
    });

    function handleChange(e) {
        setCreateNode({
            ...createNode,
            [e.target.id]: e.target.value
        })
    }

    function handleNodeSubmit(e) {
        e.preventDefault();
        addNode(createNode)
    }

    const firestore = useFirestore()
    useFirestoreConnect(['nodes'])
    useFirestoreConnect(['links'])
    const nodes = useSelector((state) => state.firestore.data.nodes)
    const links = useSelector((state) => state.firestore.data.links)


    function addNode(createNode) {
        const newNode = createNode
        return firestore.collection('nodes').add(newNode)
    }

    function addLink() {
        const newLink = { target: 'Target', source: 'Source' }
        return firestore.collection('links').add(newLink)
    }

    if(!nodes) {        
        return (
            <div>
                <CreateNodeForm handleNodeSubmit={handleNodeSubmit} handleChange={handleChange} />
            </div>
        )
    } else if(!links) {
        return (
            <div>
                <CreateNodeForm handleNodeSubmit={handleNodeSubmit} handleChange={handleChange} />
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

        const data = dataPack()

        return (
            <div>
                <CreateNodeForm handleNodeSubmit={handleNodeSubmit} handleChange={handleChange} />
                <WebController data={data} />
            </div>
        )
    }
}

export default Dashboard