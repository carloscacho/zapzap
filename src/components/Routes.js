import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

//imports components
import FormLogin from './FormLogin';
import FormCadastro from './FormCadastro';


const Routes = () => (
    <Router>
        <Stack key="root">
            <Scene hideNavBar key='FormLogin' component={FormLogin} title='Login' />
            <Scene hideNavBar key='FormCadastro' component={FormCadastro} title='Cadastro' />
        </Stack>
    </Router>
);


export default Routes;
