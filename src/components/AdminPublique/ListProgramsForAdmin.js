import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { List, Card } from 'antd';

const ListProgramsForAdmin = () => {
    const [programs, setPrograms] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchPrograms = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:5000/api/list-programs-for-admin/${id}`);
                setPrograms(response.data.programs);
            } catch (error) {
                console.error('Erreur lors de la récupération des programmes:', error);
            }
        };

        fetchPrograms();
    }, [id]);

    return (
        <div>
            <h1>Liste des Programmes pour l'Administrateur {id}</h1>
            <List
                grid={{ gutter: 16, column: 1 }}
                dataSource={programs}
                renderItem={program => (
                    <List.Item>
                        <Card title={`Programme ${program.programme_id}`}>
                            <p>Période de début: {new Date(program.periode_debut).toLocaleDateString()}</p>
                            <p>Période de fin: {new Date(program.periode_fin).toLocaleDateString()}</p>
                            <p>Critères d'évaluation: {program.criteres_evaluation}</p>
                            <p>Lieu: {program.lieu}</p>
                            <p>Description: {program.description}</p>
                            <p>Contacts d'urgence: {program.contacts_urgence}</p>
                            <p>Documents joints: {program.documents_joints}</p>
                            <p>Date de création: {new Date(program.created_at).toLocaleDateString()}</p>
                        </Card>
                    </List.Item>
                )}
            />
        </div>
    );
};

export default ListProgramsForAdmin;
