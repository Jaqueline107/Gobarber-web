import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import Logo from '../../assets/logo.svg';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
    <Container>
        <Content>
            <img src={Logo} alt="Apply" />
            <form>
                <h1>Faça seu Login</h1>
                <Input name="email" icon={FiMail} placeholder="E-mail" />
                <Input
                    name="password"
                    icon={FiLock}
                    type="password"
                    placeholder="Senha"
                />
                <Button>Entrar</Button>
                <a href="Forgot">Esqueci minha senha</a>
            </form>
            <a href="SignUp">
                <FiLogIn fontSize={23} />
                Criar conta
            </a>
        </Content>
        <Background />
    </Container>
);

export default SignIn;
