import React, {useMemo} from 'react';
import {TouchableOpacity} from 'react-native';
import {formatRelative, parseISO} from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import api from '~/services/api';

import {Container, Avatar, Name, Time, SubmitButton} from './styles';

export default function Confirm({route, navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Confirm appointment',
    });
  });

  const {provider, time} = route.params;

  const formattedTime = useMemo(
    () => formatRelative(parseISO(time), new Date()),
    [time]
  );

  async function handleCreateAppointment() {
    await api.post('appointments', {
      provider_id: provider.id,
      date: time,
    });

    navigation.navigate('Dashboard');
  }

  return (
    <Background>
      <Container>
        <Avatar
          source={{
            uri: provider.avatar
              ? provider.avatar.url
              : `https://api.adorable.io/avatars/120/${provider.name}.png`,
          }}
        />

        <Name>{provider.name}</Name>

        <Time>{formattedTime}</Time>

        <SubmitButton dark onPress={handleCreateAppointment}>
          Confirm
        </SubmitButton>
      </Container>
    </Background>
  );
}
