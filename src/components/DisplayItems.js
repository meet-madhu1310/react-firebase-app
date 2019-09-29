import React, { Component } from 'react'
import firebase from '../firebase'

import {Paper, Table, TableBody, TableCell, TableHead, TableRow, Button} from '@material-ui/core'

class DisplayItems extends Component {

    state = {
        items: []
    }

    componentDidMount() {
        const itemsRef = firebase.database().ref('items')
        itemsRef.on('value', (snapshot) => {
            let items = snapshot.val()
            let newState = []
            for(let item in items) {
                newState.push({
                    id: item,
                    title: items[item].title,
                    name: items[item].name
                })
            }
            this.setState({
                items: newState
            })
        })
    }

    removeItem(itemId) {
        const itemRef = firebase.database().ref(`/items/${itemId}`)
        itemRef.remove()
    }

    render() {
        return (
            <div className='displayContainer' style={{maxWidth: '700px', margin: 'auto', marginTop: '20px', padding: '10px'}}>
                <Paper style={{boxShadow: 'none', border: 'none'}}>
                    <Table style={{borderRadius: '8px', boxShadow: 'none', backgroundColor: '#D9E8F5', border: 'none'}}>
                        <TableHead>
                            <TableRow style={{backgroundColor: '#252525'}}>
                                <TableCell style={{fontSize: '1.25rem', color: '#bd9860'}}>Brought By</TableCell>
                                <TableCell style={{fontSize: '1.25rem', color: '#bd9860'}}>Items</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.items.map((item) => {
                                return (
                                    <TableRow key={item.id}>
                                        <TableCell>{item.name}</TableCell>
                                        <TableCell>
                                            <p style={{float: 'left'}}>{item.title}</p>
                                            <Button onClick={() => this.removeItem(item.id)} style={{marginLeft: '0px', textTransform: 'capitalize', float: 'right', backgroundColor: '#D92525', color: '#fff', padding: 0, padding: '10px 25px'}}>Remove</Button>
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        )
    }
}

export default DisplayItems