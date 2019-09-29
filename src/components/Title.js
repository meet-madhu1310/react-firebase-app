import React from 'react'
import { withStyles } from '@material-ui/core'

const styles = {
    container: {
        backgroundColor: '#252525',
        margin: 0,
        padding: 0,
        height: '70px',
    },
    titleText: {
        margin: 0,
        padding: 0,
        color: '#bd9860',
        lineHeight: '30px',
        paddingTop: '20px'
    }
}

const Title = (props) => (
    
    <div className={props.classes.container}>
        <h1 className={props.classes.titleText}>Fun with Groceries</h1>
    </div>

)

export default withStyles(styles)(Title)