import React from 'react'
import WebController from '../web/WebController'
import FormController from '../createForms/FormController'

const Dashboard = () => {
    return (
            <div>
                <FormController />
                <WebController />
            </div>
    )
}

export default Dashboard