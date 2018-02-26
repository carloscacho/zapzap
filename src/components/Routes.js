import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

//imports components
import FormLogin from './FormLogin';
import FormCadastro from './FormCadastro';
import Welcome from './Welcome';
import ContatosView from './ContatosView';

const Routes = () => (
    <Router>
        <Stack key="root">       
            <Scene hideNavBar key='FormLogin' component={FormLogin} title='Login' />
            <Scene hideNavBar key='FormCadastro' component={FormCadastro} title='Cadastro' />
            <Scene 
                hideNavBar
                key='BoasVindas' 
                component={Welcome} 
                title='Bem Vindo'
            />
            <Scene 
                hideNavBar
                key='ContatosView' 
                component={ContatosView} 
                title='Contatos'
            />    
        </Stack>
    </Router>
);


export default Routes;
