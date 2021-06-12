import React from 'react';

import { Container } from './styles';

interface LoadingProps {
  onClick: () => void;
  primary: boolean;
}

const OverClick: React.FC<LoadingProps> = ({ onClick, primary }) => {
  return <Container primary={primary} onClick={() => onClick()} />;
};

export default OverClick;
