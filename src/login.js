import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import firebase from './initializers/firebase'; //importa firebase ya configurado 

export default class Login extends Component {
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
    }
    login(){
        let provider = new firebase.auth.GoogleAuthProvider();
        //permite inicializar con una ventana emergente para iniciar sesion con google
        firebase.auth().signInWithPopup(provider)
        .then(result => {
            console.log(result);
        }); 
    }
    render(){
        return(
            <div>
                <Button variant="contained" onClik={this.login}>
                    Iniciar sesion con Google
                </Button>
            </div>
        );
    }
}