    import Cabecalho from '../components/Cabecalho.jsx';
    import Conteudo from '../components/Conteudo.jsx';
    import Menu from '../components/Menu.jsx';
    import Secao from '../components/Secao.jsx';
    import InputNome from '../components/InputNome.jsx';
    import InputSenha from '../components/InputSenha.jsx';
    import Botao from '../components/Botao.jsx';
    import InputNome from '../components/InputNome.jsx';
    import InputNome from '../components/InputNome.jsx'; 
    function Perfil() {
  
    return (
    <>
    <Cabecalho></Cabecalho>
    <Conteudo><Menu />
    <Secao texto="Perfil do Aluno"><form action="#" method="post">
<InputNome />
<InputEmail />
<InputSenha />
<Botao texto="Salvar" />
</form></Secao></Conteudo>
    </>
    );
    }
    export default Perfil;