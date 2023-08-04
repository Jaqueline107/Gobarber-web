import React from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';

import Logo from '../../assets/logo.svg';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
    <Container>
        <Background />
        <Content>
            <img src={Logo} alt="Apply" />
            <form>
                <h1>Faça seu Cadastro</h1>
                <Input name="name" icon={FiUser} placeholder="Name" />
                <Input name="email" icon={FiMail} placeholder="E-mail" />
                <Input
                    name="password"
                    icon={FiLock}
                    type="password"
                    placeholder="Senha"
                />
                <Button>Cadastrar</Button>
            </form>
            <a href="SignUp">
                <FiArrowLeft fontSize={23} />
                Voltar ao Login
            </a>
        </Content>
    </Container>
);

export default SignIn;
