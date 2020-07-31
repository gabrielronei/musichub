import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

function CategoriaPreviewCard({ cor, children }) {
  return (
    <Card style={{ background: cor }}>{children}</Card>
  );
}

CategoriaPreviewCard.defaultProps = {
  children: '',
  cor: '',
};

CategoriaPreviewCard.propTypes = {
  cor: PropTypes.string,
  children: PropTypes.string,
};

export default CategoriaPreviewCard;
