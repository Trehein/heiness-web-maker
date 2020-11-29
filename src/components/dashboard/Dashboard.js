import React from 'react'
import { useSelector } from 'react-redux'
import { useFirestore, useFirestoreConnect } from 'react-redux-firebase'
import WebController from '../web/WebController'


const Dashboard = () => {

    const firestore = useFirestore()
    useFirestoreConnect(['nodes'])
    useFirestoreConnect(['links'])
    const nodes = useSelector((state) => state.firestore.data.nodes)
    const links = useSelector((state) => state.firestore.data.links)


    function addNode() {
        const newNode = { id: 'Test', done: false }
        return firestore.collection('nodes').add(newNode)
    }

    function addLink() {
        const newLink = { target: 'Target', source: 'Source' }
        return firestore.collection('links').add(newLink)
    }

    if(!nodes) {        
        return (
            <div>
                <button onClick={addNode}>New Node</button>
            </div>
        )
    } else if(!links) {
        return (
            <div>
            <button onClick={addLink}>New Link</button>
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
                <button onClick={addNode}>New Node</button>
                <button onClick={addLink}>New Link</button>
                <WebController data={data} />
            </div>
        )
    }
}

export default Dashboard