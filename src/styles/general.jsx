import styled from '@emotion/styled';

export const FlexContainer = styled.div`
  display: flex;
  align-items: ${props => props.alignCenter ? 'center' : 'unset'};
  flex-direction: ${props => props.column ? 'column' : 'row'};
  gap: ${props => props.gap || '12px'};
`
