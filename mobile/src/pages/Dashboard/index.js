import React from 'react';

import Background from '~/Components/Background';
import Appointment from '~/Components/Appointment';
import {Container, Title, List} from './styles';

const data = [1, 2, 3, 4, 5];

export default function Dashboard() {
  return (
    <Background>
      <Container>
        <Title>Schedules</Title>

        <List
          data={data}
          keuExtractor={item => String(item)}
          renderItem={({item}) => <Appointment data={item} />}
        />
      </Container>
    </Background>
  );
}
