import style from "styled-components";

export const Container = style.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    min-height: 45vh;
    width: 80%;
`
export const PostsContainer = style.table`
    border-collapse: collapse;
    font-family: sans-serif;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    text-align: center;
`
export const Thead = style.thead`
    padding: 1rem 0;
    background-color: #009879;
`
export const Tr = style.tr`
    padding: 1rem 0;
    color: black;
    &:nth-of-type(even) {
        background-color: #f3f3f3;
    }
`
export const Th = style.th`
    padding: .5rem;
    border-bottom: 1px solid #dddddd;
`
export const Td = style.td`
    padding: .5rem;
    border-bottom: 1px solid #dddddd;
`