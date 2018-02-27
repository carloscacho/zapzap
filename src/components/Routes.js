import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

//imports components
import FormLogin from './FormLogin';
import FormCadastro from './FormCadastro';
import Welcome from './Welcome';
import PrincipalView from './PrincipalView';

//styles
import FormsStyles from '../styles/FormsStyles';

const Routes = () => (
    <Router navigationBarStyle={FormsStyles.navBar} titleStyle={FormsStyles.navTitle}>
        <Stack key="root">       
            <Scene hideNavBar key='FormLogin' component={FormLogin} title='Login' />
            <Scene key='FormCadastro' component={FormCadastro} title='Cadastro' />
            <Scene 
                hideNavBar
                key='BoasVindas' 
                component={Welcome} 
                title='Bem Vindo'
                
            />
            <Scene 
                hideNavBar
                key='PrincipaView' 
                component={PrincipalView} 
                title='principal'
                initial
            />    
        </Stack>
    </Router>
);


export default Routes;
