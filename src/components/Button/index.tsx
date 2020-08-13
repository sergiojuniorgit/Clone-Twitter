import styled from 'styled-components';


interface Props {
    outlined?: boolean;
}

export default styled.button<Props>`
  background: ${(props) => (props.outlined ? 'traspatent' : 'var(--twitter)')};
  color: ${props => (props.outlined ? 'var(--twitter)': 'var(--white)')};
`;