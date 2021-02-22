        import React, { useState, useEffect } from 'react';
        import db from './Firebase.js';
        import './App.css';
        import Todo from'./Todo.js';
        import {Button, FormControl, Input, InputLabel} from '@material-ui/core';
        import firebase from 'firebase';
        
        function App() {
          const [taches, setTaches]=useState([]);
          const [val, setVal]=useState('');
          //utilisation du hook "useEffect" pour importer les données depuis la bd 
          useEffect(() => {
             db.collection('tache').orderBy('timestamp','desc').onSnapshot(snapshot => {
               setTaches(snapshot.docs.map(doc => ({id:doc.id, tache: doc.data().tache})))
             })
 
          }, [])
          const ajoutTache = (e) =>{
            e.preventDefault();
            db.collection('tache').add({
              tache: val,
              timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })
            setVal('');
          }

          return (
            <div className="App container">
            <h1>Bienvenue sur Gestion-des-Taches.fr !</h1>
            <FormControl>
            <InputLabel>Ajoutez des Taches !</InputLabel>
            <Input value={val} onChange={e=>setVal(e.target.value)}/>
            <Button disabled={!val} type="submit" variant="contained" color="primary" onClick={ajoutTache}>Ajoute tache</Button>
            </FormControl>
            {/* <form >
              <input disabled={!val} placeholder="Ecrivez vos Taches ici...." value={val} onChange={e=> setVal(e.target.value)}/>
              <button className="btn btn-success btn-medium" type="submit"><i className="fa fa-plus"></i>Ajouter la tache</button>
            </form> */}
            
          <ul>
            {taches.map(tache =>(
              <Todo tache={tache} />
            ))}
          </ul>
        </div>
            );
          }
          
          export default App;
