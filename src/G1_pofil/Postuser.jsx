import { useEffect, useState } from "react";
import axios from "axios";
import {Button, Container,Row, Col,Accordion,Navbar,Form} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './React_API.css';
import { Link ,useParams } from "react-router-dom";

export default function Postuser() {
    const { id  } = useParams();
    const [user, setUser] = useState(null);
    const [postt,setPostt]=useState([]);
    const [filterPost , setFilterPost] = useState([]);
    const [userID,setUserID]=useState(null)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => {
                setUser(response.data);
            });            
    }, []);

    useEffect(()=>{
        axios.get (`https://jsonplaceholder.typicode.com/posts/`)
        .then((post)=>{
            setPostt(post.data);
            console.log(post.data)
        })
    },[]);

    const postss = (id) => {
        const userIsPost = postt.filter((postUsers)=> postUsers.userId === id);
        if(userIsPost){
            setUserID(id);
            setFilterPost(userIsPost);
        }
        
    }
    
    useEffect(() => {
        if (user && postt.length > 0) {
            postss(user.id);
        }
    }, [user,postt]);

    if (!user) {
        return <p>Chargement...</p>;
    }

    return(
        <Container>
            <Navbar className="bg-body-tertiary justify-content-between" style={{marginBottom:"25px"}}>
                <Form inline>
                    <img id="img" src={'../image/personne'+id+'.jpg'} alt={`Profil utilisateur ${user.id}`} />
                </Form>
                <Form inline>
                    <p id="h1" className="text-center">Posts</p>
                </Form>
                <Form inline>
                    <Row>
                        <Col xs="auto">
                            <Link to={`/`} className="text-center" style={{marginRight:"5px"}}>
                                <Button id="button1">
                                    Retourne
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                </Form>
            </Navbar>
            <Col>
            {userID === user.id && (
                <>
                {filterPost.map((post) => (
                    <Accordion defaultActiveKey={post.id} key={post.id}>
                    <Accordion.Item eventKey="1">
                    <Accordion.Header className="text-center"><strong>{post.title}</strong></Accordion.Header>
                    <Accordion.Body>
                        {post.body}
                    </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                ))}
                </>
            )}
            </Col>
        </Container>
    )
}