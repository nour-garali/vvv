// CreateEvaluationForm.js
import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';

const CreateEvaluationForm = () => {
  const [observations, setObservations] = useState('');
  const [evaluations, setEvaluations] = useState('');
  const [recommendations, setRecommendations] = useState('');
  const { conseillerId, programId } = useParams();
  const history = useHistory();

  const handleSubmit = async () => {
    try {
      await axios.post(`http://127.0.0.1:5000/api/submit-resultat/${conseillerId}/${programId}`, {
        observations,
        evaluations,
        recommendations
      });
      message.success('Rapport d\'évaluation soumis avec succès!');
      // Rediriger vers une autre page après la soumission réussie si nécessaire
      history.push(`/ListProgramsConseiller/${conseillerId}`);
    } catch (error) {
      console.error('Erreur lors de la soumission de l\'évaluation:', error);
      message.error('Erreur lors de la soumission de l\'évaluation');
    }
  };

  return (
    <div>
      <h1>Formulaire d'Évaluation</h1>
      <Form onFinish={handleSubmit}>
        <Form.Item label="Observations" name="observations">
          <Input.TextArea value={observations} onChange={(e) => setObservations(e.target.value)} />
        </Form.Item>
        <Form.Item label="Évaluations" name="evaluations">
          <Input.TextArea value={evaluations} onChange={(e) => setEvaluations(e.target.value)} />
        </Form.Item>
        <Form.Item label="Recommandations" name="recommendations">
          <Input.TextArea value={recommendations} onChange={(e) => setRecommendations(e.target.value)} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Soumettre</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateEvaluationForm;
