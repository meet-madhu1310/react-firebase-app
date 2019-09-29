import React from 'react'
import firebase from '../firebase'

import { TextField, Button, withStyles } from '@material-ui/core'

const styles = {
    formContainer: {
        maxWidth: '700px',
        margin: 'auto',
        marginTop: '20px',
        padding: '10px'
    }
}

class Form extends React.Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    state = {
        currentItem: '',
        userName: '',
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const itemsRef = firebase.database().ref('items')
        const item = {
            title: this.state.currentItem,
            name: this.state.userName
        }
        itemsRef.push(item)
        this.setState({
            currentItem: '',
            userName: ''
        })
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit} className={this.props.classes.formContainer}>
                <TextField
                    label='Name'
                    placeholder='Enter your name'
                    name='userName'
                    fullWidth
                    variant='outlined'
                    InputLabelProps={{shrink: true}}
                    onChange={this.handleChange}
                    value={this.state.userName}
                >
                </TextField>
                <TextField
                    label='Item'
                    placeholder='Enter the item'
                    name='currentItem'
                    fullWidth
                    variant='outlined'
                    InputLabelProps={{shrink: true}}
                    style={{marginTop: '20px'}}
                    onChange={this.handleChange}
                    value={this.state.currentItem}
                >
                </TextField>
                <Button
                    variant='contained'
                    color='secondary'
                    
                    style={{marginTop: '20px', textTransform: 'capitalize', fontSize: '16pt', padding: '10px 32px', backgroundColor: '#bd9860', color: '#252525', boxShadow: 'none'}}
                    type='submit'
                >
                    Add Item
                </Button>
            </form>
        )
    }
}

export default withStyles(styles)(Form)