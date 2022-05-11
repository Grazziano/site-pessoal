import React from 'react';
import { Container, Content } from './style';
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
} from 'react-icons/fa';
import ItemContact from '../../components/ItemContact';

export default function Contact() {
  return (
    <Container>
      <Content>
        <ItemContact
          IconFa={FaLinkedin}
          LinkContact="https://www.linkedin.com/in/grazziano-fagundes/"
        />
        <ItemContact
          IconFa={FaFacebook}
          LinkContact="https://www.facebook.com/grazziano.borgesfagundes/"
        />
        <ItemContact
          IconFa={FaInstagram}
          LinkContact="https://www.instagram.com/grazzianoborgesfagundes/"
        />
        <ItemContact
          IconFa={FaEnvelope}
          LinkContact="grazzianofagundes@gmail.com"
        />
      </Content>
    </Container>
  );
}
