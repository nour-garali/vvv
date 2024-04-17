// ListProgramsConseiller.js
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { List, Card, Button } from 'antd';
import axios from 'axios';

const ListProgramsConseiller = () => {
  const [programs, setPrograms] = useState([]);
  const { conseillerId } = useParams();

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:5000/api/list-programs-for-conseiller/${conseillerId}`);
        setPrograms(response.data.programs);
      } catch (error) {
        console.error('Erreur lors de la récupération des programmes:', error);
      }
    };
    fetchPrograms();
  }, [conseillerId]);

  return (
    <div>
      <h1>Liste des Programmes pour le Conseiller {conseillerId}</h1>
      <List
        grid={{ gutter: 16, column: 1 }}
        dataSource={programs}
        renderItem={program => (
          <List.Item>
            <Card title={`Programme ${program.programme_id}`}>
              <p>Début: {new Date(program.periode_debut).toLocaleDateString()}</p>
              <p>Fin: {new Date(program.periode_fin).toLocaleDateString()}</p>
              <p>Évaluation: {program.criteres_evaluation}</p>
              <p>Lieu: {program.lieu}</p>
              <p>Description: {program.description}</p>
              <p>Contacts d'urgence: {program.contacts_urgence}</p>
              <p>Documents joints: {program.documents_joints}</p>
              <p>Date de création: {new Date(program.created_at).toLocaleDateString()}</p>
              <Link to={`/create-evaluation/${conseillerId}/${program.programme_id}`}>
                <Button type="primary">Créer Évaluation</Button>
              </Link>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default ListProgramsConseiller;
