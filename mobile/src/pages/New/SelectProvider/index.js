import React, {useState, useEffect} from 'react';

import Background from '~/components/Background';
import api from '~/services/api';

import {Container, ProvidersList, Provider, Avatar, Name} from './styles';

export default function SelectProvider({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Select date and time',
    });
  });

  const [providers, setProviders] = useState([]);

  useEffect(() => {
    async function loadProviders() {
      const response = await api.get('providers');

      setProviders(response.data);
    }

    loadProviders();
  }, []);

  return (
    <Background>
      <Container>
        <ProvidersList
          data={providers}
          keyExtractor={provider => String(provider.id)}
          renderItem={({item: provider}) => (
            <Provider
              onPress={() => navigation.navigate('SelectDateTime', {provider})}>
              <Avatar
                source={{
                  uri: provider.avatar
                    ? provider.avatar.url
                    : `https://api.adorable.io/avatars/120/${provider.name}.png`,
                }}
              />
              <Name>{provider.name}</Name>
            </Provider>
          )}
        />
      </Container>
    </Background>
  );
}
