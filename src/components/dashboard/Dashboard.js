import React from 'react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import WebController from '../web/WebController'

import FormController from '../createForms/FormController'

const Dashboard = () => {
    useFirestoreConnect(['nodes'])
    useFirestoreConnect(['links'])
    const nodes = useSelector((state) => state.firestore.data.nodes)
    const links = useSelector((state) => state.firestore.data.links)

    if(!nodes) {        
        return (
            <div>
                <FormController />
            </div>
        )
    } else if(!links) {
        return (
            <div>
                <FormController />
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
                <FormController />
                <WebController data={data} />
            </div>
        )
    }
}

export default Dashboard