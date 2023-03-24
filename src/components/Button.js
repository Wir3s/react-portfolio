import styled from "styled-components"

export function CustomButton (props){

const Button = styled.button`
background-color: ${props => props.lightTheme ? 'pink' : 'purple'};
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
    console.log(props)
    const {functionToUse,content, lightTheme} = props
    return(
        <Button lightTheme={lightTheme} onClick={()=> functionToUse()}>{content}</Button>
    )
}