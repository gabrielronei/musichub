import React from 'react';
import styled from 'styled-components';

const Card = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  margin-bottom: 16px;
  display: inline-block;
  line-height: 1;
  padding: 20px;
  background: 'white';
  border-radius: 4px;
`;    

Card.defaultProps = {
  className: '',
  cor: '',
};

function CategoriaPreviewCard(props) {

    return (
        <Card style={{background: props.cor}}>{props.children}</Card>
    );

}


export default CategoriaPreviewCard;