import React, { useRef, useEffect, useState } from 'react'
import WebController from '../web/WebController'
import FormController from '../createForms/FormController'
import {
    Box,
    Flex
} from 'rebass'
import { useResize } from '../web/WebResizer'

const Dashboard = () => {
    const componentRef = useRef()
    const { width, height } = useResize(componentRef)

    return (
        <Flex>
            <Box
                ref={componentRef}
                width={[3/4, 3/4, 3/4]}
            >
                <WebController height={height} width={width} />
            </Box>
            <Box
                width={[1/4]}
                p={1}
            >
                <FormController />
            </Box>
        </Flex>
    )
}

export default Dashboard