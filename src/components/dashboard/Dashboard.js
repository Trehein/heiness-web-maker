import React from 'react'
import { useFirestore } from 'react-redux-firebase'

const Dashboard = () => {

    const firestore = useFirestore()

    function addNode() {
        const newNode = { id: 'Test', done: false }
        return firestore.collection('nodes').add(newNode)
    }

    return (
        <div>
            <button onClick={addNode}>New Node</button>
        </div>
    )
}

export default Dashboard