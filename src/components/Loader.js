import React from 'react'
import { Spinner } from 'react-bootstrap'

export const Loader = () => {
    return (
        <Spinner
            animation="border"
            role="status"
            style={{ width: "20rem", height: "20rem", margin: "auto", display: "block", color:"red" }}
        >
          <span className="sr-only">Loading...</span>
        </Spinner>
    )
}
