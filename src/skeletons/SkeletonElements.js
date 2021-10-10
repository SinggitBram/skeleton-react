import React from 'react'
import "./skeletons.css"

function SkeletonElements({type}) {

    const classes = `skeleton ${type}` 

    return (
        <div className={classes}>
            
        </div>
    )
}

export default SkeletonElements
