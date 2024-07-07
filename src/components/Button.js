import styled from "styled-components";

export function CustomButton(props) {
  const Button = styled.button`
    background-color: steelblue;
    color: white;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid darkblue;
    border-radius: 3px;
  `;
  const { href, content } = props;
  return (
    <a
      href={href}
      className="portbutton"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button>{content}</Button>
    </a>
  );
}
