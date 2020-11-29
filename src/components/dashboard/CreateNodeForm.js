import React from 'react'

const CreateNodeForm = (props) => {

    return (
        <form onSubmit={props.handleNodeSubmit} >
            <h5>Create Node</h5>
            <div>
                <label htmlFor="Name">Name: </label>
                <input type="id" id="id" onChange={props.handleChange}/>
            </div>
            <div>
                <label htmlFor="Group">Group: </label>
                <input type="group" id="group" onChange={props.handleChange}/>
            </div>
            <div>
                <label htmlFor="Color">Color: </label>
                <input type="color" id="color" onChange={props.handleChange}/>
            </div>
            <div>
                <label htmlFor="Size">Size: </label>
                <input type="number" id="size" onChange={props.handleChange}/>
            </div>
            <div>
                <label htmlFor="Type">Type: </label>
                <input type="type" id="type" onChange={props.handleChange}/>
            </div>
            <div>
                <button>Create Node</button>
            </div>
        </form>
    )
}

export default CreateNodeForm