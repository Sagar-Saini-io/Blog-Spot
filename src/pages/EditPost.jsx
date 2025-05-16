import React,  {useEffect, useState} from 'react'
import appWriteService from "../appwrite/config";
import { Container, PostForm } from "../components/index";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {

    const [post, setPosts] = useState(null);
    const navigate = useNavigate();
    const {slug} = useParams();

    useEffect(()=> {
        if(slug){
            appWriteService.getPost(slug).then((post)=> {
                if(post){
                    setPosts(post);
                }
            })
        } else{
            navigate('/')
        }
    }, [navigate, slug])

  return post ? (
    <div className=' py-8'>
        <Container>
            <PostForm  post={post} />
        </Container>
    </div>
  ) : null
}

export default EditPost