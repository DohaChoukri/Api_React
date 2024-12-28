import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button, Container,Row, Col,Image } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './React_API.css';
import { Link } from "react-router-dom";

export default function React_api() {
    const [utilisateur, setutilisateur] = useState([]);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/`)
            .then((response) => {
                setutilisateur(response.data);
                console.log(response.data);
            }); 
    }, []);

    const listepersonne = utilisateur.map((etu1) => {
        return (
            <Col md={6} lg={4}>
            <Card key={etu1.id} className="card" style={{height:"350.950px" , width: '18rem'}}>
                <Image id="profil" src={"/image/personne"+etu1.id+".jpg"} alt={`Profil utilisateur ${etu1.id}`} roundedCircle/>
                <Card.Body>
                    <Card.Title><strong>Nom : {etu1.name}</strong></Card.Title>
                    <Card.Text>Email : {etu1.email}</Card.Text>
                    <Card.Text>Ville : {etu1.address.city}</Card.Text>
                    <Link to={`/Postuser/${etu1.id}`}>
                        <Button id="button">
                            Details posts
                        </Button>
                    </Link>
                </Card.Body>
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
