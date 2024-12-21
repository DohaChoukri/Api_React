import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button, Container,Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from './profil.webp';
import './Hiba_API.css';

export default function Hiba_api() {
    const [etulisateur, setEtulisateur] = useState([]);
    const [postt,setPostt]=useState([]);
    const [filterPost , setFilterPost] = useState([])
    const [ispost, setIspost]=useState(false);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((data) => {
                setEtulisateur(data.data);
            });
    }, []);

    useEffect(()=>{
        axios.get ("https://jsonplaceholder.typicode.com/posts")
        .then((post)=>{
            setPostt(post.data);
        })
    },[]);
    const postss = (id) => {
        const userIsPost = postt.filter((postUsers)=> postUsers.userId === id);
        if(userIsPost){
            setIspost(id);
            setFilterPost(userIsPost);
        }
    }
    const masquer = () => {
        setIspost(false)
    }
    const listepersonne = etulisateur.map((etu1) => {
        return (
            <Col md={6} lg={4} key={etu1.id} className="mb-4">
            <Card key={etu1.id} className="card">
                <div id="img"><Card.Img variant="top" src={Image} /></div>
                <Card.Body>
                    <Card.Title><strong>Nom : {etu1.name}</strong></Card.Title>
                    <Card.Text>Email : {etu1.email}</Card.Text>
                    <Card.Text>Ville : {etu1.address.city}</Card.Text>
                    <Button id="button" onClick={()=>postss(etu1.id)}>Details posts</Button>
                </Card.Body>
                {ispost === etu1.id && (
                        <div id="post1">
                        <h2 className="text-center">Nombre de posts : {filterPost.length}</h2>
                        {filterPost.map((post) => (
                            <Card id="post" key={post.id} > 
                                <Card.Title className="text-center">
                                    <strong>{post.title}</strong>
                                </Card.Title>
                                <Card.Text>{post.body}</Card.Text>
                            </Card>
                        ))}
                        <div className="d-flex justify-content-center align-items-center">
                            <Button id="button"   onClick={masquer}>Masquer les posts</Button>
                        </div>
                    </div>
                )}             
            </Card>
            </Col>
        );
    });

    return (
        <Container>
            <Row className="d-flex flex-wrap">{listepersonne}</Row>
        </Container>
    );
}
