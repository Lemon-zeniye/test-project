import style from "styled-components";

export const Container  = style.div`
    display: flex;
    justify-content: center;
    width: 100%;
    flex-direction: column;
    align-items: center;
    height: 90vh;
`
export const Title = style.h1`
    font-weight: lighter;
    color: #5f035f;
    text-decoration: underline;
`

export const FormContainer = style.div`
    display: flex;
    width: 60%;
    flex-direction: column;
    justify-content: center;
    background-color: light-blue;
    background-color: #e9e9e9c0;
    box-shadow: 1px 1px 4px gray;
    border-radius: .3rem;

`
export const Card = style.form`
    width: 100%;
    diplay:flex;
    flex-direction: column;
`
export const Label = style.label`
    display: ${props => props.select ? "inline" : "block"};
    margin: .8rem 0 .4rem .6rem;
    color: green;
`
export const Input = style.input`
    margin-left: .5rem;
    width: 94%;
    background: white;
    padding: .5rem .4rem;
    margin-left: .8rem;
    border: none;
    outline-color: #055705;
    border-radius: .3rem;
    &::placeholder {
        color: #bdbbbb;
    }

`
export const Select = style.select`
    padding: .4rem .4rem;
    border: none;
    margin: .3rem;
    border-radius: .3rem;
    outline-color: #055705;

`
export const Button = style.button`
    display:block;
    cursor: pointer;
    width: 98%;
    padding: .7rem 0;
    border: none;
    margin: .3rem .3rem;
    border-radius: .3rem;
    border: ${props => props.sub ? "2px solid #055705 ": "2px solid #810404df"};
    color: ${props => props.sub ? "#055705" : "#810404df"};
    background: white;
    font-weight: bold;
    &:hover {
        background: ${props => props.sub ? "#055705 ": "#810404df"};
        color: white;
        border: ${props => props.sub ? "2px solid #04d404 ": "2px solid #df0a0adf"};
    }
`