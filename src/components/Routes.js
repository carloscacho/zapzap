import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

//imports components
import FormLogin from './FormLogin';
import FormCadastro from './FormCadastro';
import Welcome from './Welcome';
import PrincipalView from './PrincipalView';
import AddContatosView from './principais/addContato';

//styles
import FormsStyles from '../styles/FormsStyles';


//construção das rotas de todos os compontes de cenas
const Routes = () => (
    <Router navigationBarStyle={FormsStyles.navBar} titleStyle={FormsStyles.navTitle}>
        <Stack key="root">
            {/* rota principal para o componente de login */}
            <Scene hideNavBar key='FormLogin' component={FormLogin} title='Login' />
            {/* rota de cadastro caso o usuario não tenha sido cadstrado ainda */}
            <Scene key='FormCadastro' component={FormCadastro} title='Cadastro' />
            {/* rota de boas vindas para usarios que realizarem o cadastro*/}
            <Scene 
                hideNavBar
                key='BoasVindas' 
                component={Welcome} 
                title='Bem Vindo'
                
            />
            {/* rota para tela principal para tela de contatos e conversas dividida por tab */}
            <Scene 
                hideNavBar
                key='PrincipaView' 
                component={PrincipalView} 
                title='principal'
                
            />
            {/* rota para cena de adicionar contatos */}
            <Scene 
                key='AddContato' 
                component={AddContatosView} 
                title='Adicionar Contato'
                
            />    
        </Stack>
    </Router>
);


export default Routes;
