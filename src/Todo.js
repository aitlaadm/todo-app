import React, { useState } from 'react'
import { List, ListItem, ListItemText, Modal, Button } from '@material-ui/core';
import './Todo.css';
import db from './Firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
    paper:{
        position:'absolute',
        width:400,
        backgroundColor:theme.palette.background.paper,
        border:'2px solid #000',
        boxShadow: theme.shadows[5],
        padding:theme.spacing(2,4,3),
    },
}));

function Todo(props) {
    const classes= useStyles()
    const supptache = (e) =>{
        db.collection('tache').doc(props.tache.id).delete();
    }

    const [open,setOpen]= useState(false);
    const [input,setInput]=useState('');


    // const handelOpen = () =>{
    //     setOpen(true);
    // }

    const editTache = (e) =>{
        db.collection('tache').doc(props.tache.id).set({
            tache: input
        },{merge:true})
        setOpen(false)
    }

    return (
        <>
        <Modal 
            open={open}
            onClose={e => setOpen(false)}
            >
                <div className={classes.paper}>
                    <h1>Ecrivez la tache</h1>
                    <form>
                    <input value={input} onChange={e=> setInput(e.target.value)}/>
                    <Button disabled={!input} variant="contained" color="primary" onClick={editTache}>Confirmer</Button>
                    </form>

                </div>
            </Modal>
        <List className="list">
            <ListItem>
            <Button variant="contained" onClick={e=> setOpen(true)} color="secondary">Modifier</Button>
                <ListItemText primary={props.tache.tache} secondary="future deadline :alarm"></ListItemText>
                <DeleteForeverIcon color="primary" fontSize="large" onClick={supptache}/>
            </ListItem>
        </List>
        </>
    )
}

export default Todo
