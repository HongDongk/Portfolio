import styled from 'styled-components';

interface TechStackBoxProps {
  stack: string;
}

export default function TechStackBox({ stack }: TechStackBoxProps) {
  return <Content>{stack}</Content>;
}

const Content = styled.div`
  height: 15px;
  line-height: 15px;
  margin-right: 5px;
  border-radius: 8px;
  padding: 4px;
  border: 1px solid gray;
  font-size: 13px;
`;
