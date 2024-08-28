import React, { useEffect, useState } from "react";
import { Table } from 'reactstrap';
import { Row } from 'reactstrap';
import { Col } from 'reactstrap';
import { Container } from 'reactstrap';

export const Home = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((json) => setData(json));
    }, []);
    return (
        <div>
            {console.log(data)}
            <h1>Home</h1>
            <Container fluid="md">
                <Row>
                    <Col>

                        <Table striped size="sm">
                            <thead>
                                <tr className="table-dark">
                                    <th>ID</th>
                                    <th>NAMA</th>
                                    <th>USERNAME</th>
                                    <th>EMAIL</th>
                                    <th>ADDRESS</th>
                                    <th>PHONE </th>
                                    <th>WEBSITE </th>
                                    <th>COMPANY</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((user) => (
                                    <tr>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.username}</td>
                                        <td >{user.email}</td>
                                        <td>{user.address.street} , {user.address.suite} , {user.address.city} , {user.address.zipcode} , {user.address.geo.lat} , {user.address.geo.lng}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.website}</td>
                                        <td>{user.company.name}, {user.company.catchPhrase}, {user.company.bs}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};
