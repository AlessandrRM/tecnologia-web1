import Conteudo from '../components/Conteudo.jsx';
import Rodape from '../components/Rodape.jsx';
import Icone from '../components/Icone.jsx';
import Titulo from '../components/Titulo.jsx';
import InputEmail from '../components/InputEmail.jsx';
import InputSenha from '../components/InputSenha.jsx';
import Botao from '../components/Botao.jsx';
import Link from '../components/Link.jsx';
function Login() {
    return (
        <>
<Conteudo><Icone imagem="https://www.svgrepo.com/show/411955/learn.svg" texto="Logo da Aplicação"/>
    <Titulo texto="Aluno Online" />
    <form action="#" method="post">
    <InputEmail />
    <InputSenha />
    <Botao texto="Entrar"/>
    <Link texto="Esqueceu a Senha?" />
    </form>
</Conteudo>
<Rodape texto="Copyright (C) 2024" />
</>
    );
}
export default Login;