import style from "styled-components"
export const Container = style.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    justify-content: center;
    height: 90vh;
`
export const Button = style.button`
    position: absolute;
    padding: .5rem; 
    color: green;
    background: transparent;
    border: 2px solid green;
    border-radius: .3rem;
    cursor: pointer;
    top: 6rem;
    left: 16rem;

`