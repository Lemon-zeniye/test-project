import Post from "./Post";
import {useSelector}  from "react-redux";
import { Container, PostsContainer, Thead, Tr, Th } from "./Post-style";
const Posts = ({ setCurrentId, setAddForm }) => {
    const posts = useSelector((state) => state.posts);
    return(
        <Container>
            <h1>List of Employee</h1>
            <PostsContainer>
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Gender</Th>
                        <Th>Salary</Th>
                        <Th>Birth-Date</Th>
                        <Th>action</Th>
                    </Tr>                    
                </Thead>
                <tbody>
                    {
                        !posts.length ? <div>There is no post</div> : 
                        posts.map((post, index) => (
                            <Post key={index} post={post} setAddForm={setAddForm} setCurrentId={setCurrentId} />
                        ))
                    }
                </tbody>
            </PostsContainer>
        </Container>
    )
}
export default Posts;
