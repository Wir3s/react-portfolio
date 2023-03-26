import styled from "styled-components"

export function CustomButton (props){

const Button = styled.button`
background-color: blue;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
    const { href, content } = props
    return(
        <Button href={href}>{content}</Button>
    )
}