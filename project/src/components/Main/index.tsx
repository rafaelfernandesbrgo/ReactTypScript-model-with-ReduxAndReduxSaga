import React from 'react';
import Cart from '../Cart';
import Catalog from '../Catalog';
import { Container  } from './styles';



const Main: React.FC = () => {


 return (
    <Container>
      <section><Catalog/></section>
      <section><Cart/></section>
    </Container>
  );
};

export default Main;
