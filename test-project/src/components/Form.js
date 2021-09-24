import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../actions/posts";
import { Container, Title, FormContainer, Card, Label, Input,  Select, Button } from "./Form-style";
const Form = ({currentId, setAddForm, setCurrentId}) => {

    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) :  null);
    
    const [postData, setPostData] = useState({
        name: "", gender: "", date: "", salary: ""
    });
    useEffect(() => {
        if(post) setPostData(post);
    }, [post])
    const dispatch = useDispatch(); 
    const handleSubmit = (e) => {
        e.preventDefault();
        if(currentId) {
            dispatch(updatePost(currentId, postData))
        } else {
            dispatch(createPost(postData));
        }
        handelClear();
        setAddForm(false);
    }
    const handelClear = () => {
        setCurrentId(null);
        setPostData({name: "", gender: "", date: "", salary: ""});
    }
    return(
    <Container>
        <Title>Add Employee</Title>
        <FormContainer>
            <Card onSubmit={handleSubmit}>
                <Label htmlFor="name">Name</Label>
                <Input placeholder="Name" type="text" name="name" value={postData.name} onChange={(e) => setPostData({ ...postData, name: e.target.value})} />
                <Label htmlFor="salary">Salary</Label>
                <Input placeholder="Salary" type="text" value={postData.salary} onChange={(e) => setPostData({...postData, salary: e.target.value})} name="salary"/>
                <Label htmlFor="date">Birth Date</Label>
                <Input placeholder="Birth-date" type="date" name="date" value={postData.date} onChange={(e) => setPostData({...postData, date: e.target.value})} />
                <Label select htmlFor="gender">Gender</Label>
                <Select name="gender" id="" value={postData.gender} onChange={(e) => setPostData({...postData, gender: e.target.value})}>
                    <option>Gender</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                </Select>
                <Button sub type="submit">Submit</Button>
            </Card>
            <Button onClick={handelClear}>Clear</Button>
        </FormContainer>
    </Container>
    )
}

export default Form;