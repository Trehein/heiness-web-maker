import React from 'react'
import { useSelector } from 'react-redux'
import { useFirestore, useFirestoreConnect } from 'react-redux-firebase'
import WebController from '../web/WebController'


const Dashboard = () => {

    const firestore = useFirestore()
    useFirestoreConnect(['nodes'])
    const nodes = useSelector((state) => state.firestore.data.nodes)

    function addNode() {
        const newNode = { id: 'Test', done: false }
        return firestore.collection('nodes').add(newNode)
    }

    if(!nodes) {        
        return (
            <div>
                ...loading
            </div>
        )
    } else {
        var nodeArray = [];
        Object.keys(nodes).forEach((key) => {
            var newObj = {};
            newObj = nodes[key];
            nodeArray.push(newObj);
        })

        // console.log(arr)
        // arr.map((node) => {
        //     console.log(node.id)
        // })

        return (
            <div>
                <button onClick={addNode}>New Node</button>
                <WebController nodeData={nodeArray} />
            </div>
        )
    }
}

export default Dashboard