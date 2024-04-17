import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col, Card, Typography, Divider } from 'antd';

const { Title, Text } = Typography;

const ListAllPrograms = () => {
    const [programs, setPrograms] = useState([]);

    useEffect(() => {
        const fetchPrograms = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/list-all-programs');
                setPrograms(response.data.programs);
            } catch (error) {
                console.error('Erreur lors de la récupération des programmes:', error);
            }
        };

        fetchPrograms();
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <Title level={2}>Liste de tous les Programmes de Visite</Title>
            <Divider />
            <Row gutter={[16, 16]}>
                {programs.map(program => (
                    <Col key={program.id} xs={24} sm={12} md={8} lg={6}>
                        <Card title={`Programme ${program.id}`}>
                            <Text strong>Période:</Text>
                            <Text>{new Date(program.periode_debut).toLocaleDateString()} - {new Date(program.periode_fin).toLocaleDateString()}</Text>
                            <Divider style={{ margin: '8px 0' }} />
                            <Text strong>Critères d'évaluation:</Text>
                            <Text>{program.criteres_evaluation}</Text>
                            <Divider style={{ margin: '8px 0' }} />
                            <Text strong>Lieu:</Text>
                            <Text>{program.lieu}</Text>
                            <Divider style={{ margin: '8px 0' }} />
                            <Text strong>Description:</Text>
                            <Text>{program.description}</Text>
                            <Divider style={{ margin: '8px 0' }} />
                            <Text strong>Contacts d'urgence:</Text>
                            <Text>{program.contacts_urgence}</Text>
                            <Divider style={{ margin: '8px 0' }} />
                            <Text strong>Documents joints:</Text>
                            <Text>{program.documents_joints}</Text>
                            <Divider style={{ margin: '8px 0' }} />
                            <Text strong>Date de création:</Text>
                            <Text>{new Date(program.created_at).toLocaleDateString()}</Text>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default ListAllPrograms;
