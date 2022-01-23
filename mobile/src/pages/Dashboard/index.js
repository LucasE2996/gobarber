import React, {useEffect, useState} from 'react';

import Background from '~/components/Background';
import Appointment from '~/components/Appointment';
import api from '~/services/api';

import {Container, Title, List} from './styles';

export default function Dashboard({navigation}) {
  const [appointments, setAppointments] = useState([]);

  async function loadAppointments() {
    const response = await api.get('appointments');

    setAppointments(response.data);
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      loadAppointments();
    });

    return unsubscribe;
  }, [navigation]);

  async function handleCancel(id) {
    const response = await api.delete(`appointments/${id}`);

    setAppointments(
      appointments.map(appointment =>
        appointment.id === id
          ? {
              ...appointment,
              cancelled_at: response.data.cancelled_at,
            }
          : appointment
      )
    );
  }

  return (
    <Background>
      <Container>
        <Title>Schedules</Title>

        <List
          data={appointments}
          keyExtractor={item => item.id.toString(10)}
          renderItem={({item}) => (
            <Appointment onCancel={() => handleCancel(item.id)} data={item} />
          )}
        />
      </Container>
    </Background>
  );
}
