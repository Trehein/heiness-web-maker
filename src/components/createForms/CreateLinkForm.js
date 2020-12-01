import React from 'react'

const CreateLinkForm = (props) => {
    return (
        <form onSubmit={props.handleLinkSubmit} >
            <h5>Create Link</h5>
            <div>
                <label htmlFor="Name">Target: </label>
                <input type="text" id="target" onChange={props.handleLinkChange}/>
            </div>
            <div>
                <label htmlFor="Source">Source: </label>
                <input type="text" id="source" onChange={props.handleLinkChange}/>
            </div>
            <div>
                <button>Create Link</button>
            </div>
        </form>
    )
}

export default CreateLinkForm;