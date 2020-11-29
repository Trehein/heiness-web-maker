import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useFirestore, useFirestoreConnect } from 'react-redux-firebase'
import WebController from '../web/WebController'

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
                <form onSubmit={handleNodeSubmit} >
                    <h5>Create Node</h5>
                    <div>
                        <label htmlFor="Name">Name: </label>
                        <input type="id" id="id" onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="Group">Group: </label>
                        <input type="group" id="group" onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="Color">Color: </label>
                        <input type="color" id="color" onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="Size">Size: </label>
                        <input type="size" id="size" onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="Type">Type: </label>
                        <input type="type" id="type" onChange={handleChange}/>
                    </div>
                    <div>
                        <button>Create Node</button>
                    </div>
                </form>
            </div>
        )
    } else if(!links) {
        return (
            <div>
                <button onClick={addLink}>New Link</button>
                <form onSubmit={handleNodeSubmit} >
                    <h5>Create Node</h5>
                    <div>
                        <label htmlFor="Name">Name: </label>
                        <input type="id" id="id" onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="Group">Group: </label>
                        <input type="group" id="group" onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="Color">Color: </label>
                        <input type="color" id="color" onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="Size">Size: </label>
                        <input type="size" id="size" onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="Type">Type: </label>
                        <input type="type" id="type" onChange={handleChange}/>
                    </div>
                    <div>
                        <button>Create Node</button>
                    </div>
                </form>
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
                <form onSubmit={handleNodeSubmit} >
                    <h5>Create Node</h5>
                    <div>
                        <label htmlFor="Name">Name: </label>
                        <input type="id" id="id" onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="Group">Group: </label>
                        <input type="group" id="group" onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="Color">Color: </label>
                        <input type="color" id="color" onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="Size">Size: </label>
                        <input type="size" id="size" onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="Type">Type: </label>
                        <input type="type" id="type" onChange={handleChange}/>
                    </div>
                    <div>
                        <button>Create Node</button>
                    </div>
                </form>
                <WebController data={data} />
            </div>
        )
    }
}

export default Dashboard