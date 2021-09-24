import { useEffect } from "react";
import { getPost } from "../actions/posts";
import { useDispatch } from "react-redux";
import { Tr,Td } from "./Post-style";
import { deletePost } from "../actions/posts";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const Post = ({ post, setCurrentId, setAddForm }) => {
    const dispatch = useDispatch();
    function editHandeler(){
        setAddForm(true);
        setCurrentId(post._id);
    }
    useEffect(() => {
        dispatch(getPost());
    }, [dispatch, post]);
    return(
            <Tr>
                <Td>{post.name}</Td>
                <Td>{post.gender}</Td>
                <Td>{post.salary}</Td>
                <Td>{post.date}</Td>
                <Td><button onClick={() => dispatch(deletePost(post._id)) } ><AiFillDelete /></button>
                <button onClick={ editHandeler }><AiFillEdit /></button></Td>
            </Tr>
    )
}
export default Post;