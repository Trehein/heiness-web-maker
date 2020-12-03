import React, { useState } from 'react'
// import { useSelector } from 'react-redux'
import { useFirestore } from 'react-redux-firebase'
import CreateNodeForm from './CreateNodeForm'
import CreateLinkForm from './CreateLinkForm'

const FormController = () => {
    const [createNode, setCreateNode] = useState({
        id: '',
        group: '',
        color: '',
        size: 0,
        type: ''
    });

    const [createLink, setCreateLink] = useState({
        target: '',
        source: ''
    })

    function handleChange(e) {
        setCreateNode({
            ...createNode,
            [e.target.id]: e.target.value
        })
    }

    function handleLinkChange(e) {
        setCreateLink({
            ...createLink,
            [e.target.id]: e.target.value
        })
        console.log(createLink)
    }

    function handleNodeSubmit(e) {
        e.preventDefault();
        addNode(createNode)
    }

    function handleLinkSubmit(e) {
        console.log(createLink)
        e.preventDefault();
        addLink(createLink)
    }

    const firestore = useFirestore()

    function addNode(createNode) {
        const newNode = createNode
        return firestore.collection('nodes').add(newNode)
    }

    function addLink() {
        const newLink = createLink
        return firestore.collection('links').add(newLink)
    }

    return (
        <div>
            <CreateNodeForm handleNodeSubmit={handleNodeSubmit} handleChange={handleChange} />
            <CreateLinkForm handleLinkSubmit={handleLinkSubmit} handleLinkChange={handleLinkChange} />
        </div>
    )
}

export default FormController
