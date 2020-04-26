import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {TouchableOpacity} from 'react-native';

import {Container, Left, Avatar, Info, Name, Time} from './styles';

export default function Appointment() {
  return (
    <Container>
      <Left>
        <Avatar
          source={{uri: 'https://api.adorable.io/avatars/50/bootcamp.png'}}
        />

        <Info>
          <Name>User name</Name>
          <Time>in 3 hours</Time>
        </Info>
      </Left>

      <TouchableOpacity onPress={() => {}}>
        <Icon name="event-busy" size={20} color="#f97171" />
      </TouchableOpacity>
    </Container>
  );
}
