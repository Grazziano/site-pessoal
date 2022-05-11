import { FaArrowRight } from 'react-icons/fa';
import {
  Container,
  Content,
  Infos,
  Name,
  Function,
  Intro,
  LinkProjects,
  Logo,
  Img,
} from '../../styles/indexStyle';
import Link from 'next/link';

export default function Home() {
  return (
    <Container>
      <Content>
        <Infos>
          <Name>Olá, sou Grazziano</Name>
          <Function>FullStack Developer</Function>
          <Intro>
            Graduado em Análise e Desenvolvimento de sistemas pela Faculdade de
            Tecnologia SENAC RS, e em desenvolvimento web pela Trybe, tenho
            experiência em desenvolvimento Web (React, Node, JS, MySQL e
            outros).
          </Intro>
          <Link href="projects">
            <LinkProjects> PROJETOS <FaArrowRight /></LinkProjects>
          </Link>
        </Infos>
        <Logo>
          <Img src="/images/foto-perfil.jpg" alt="logo" />
        </Logo>
      </Content>
    </Container>
  );
}
