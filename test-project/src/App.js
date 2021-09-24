import { useEffect, useState } from "react";
import Form from "./components/Form";
import Posts from "./components/Posts";
import {getPost} from "./actions/posts";
import { useDispatch } from "react-redux";

import { Container, Button } from "./App-style";
const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPost());
    }, [currentId , dispatch]);

    const [addForm, setAddForm] = useState(false);
    return(
        <Container>
            <Button onClick={() => setAddForm(!addForm)}>Add Employee</Button>
            {

                addForm ? <Form setAddForm ={ setAddForm }  setCurrentId={setCurrentId} currentId={currentId}/> : <Posts setAddForm={setAddForm}  setCurrentId={setCurrentId}  />
            
            }
        </Container>
    )
}
export default App;