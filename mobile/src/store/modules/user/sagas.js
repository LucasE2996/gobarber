import {Alert} from 'react-native';
import {takeLatest, call, put, all} from 'redux-saga/effects';

import api from '~/services/api';

import {updateProfileSuccess, updateProfileFailure} from './actions';

/**
 * This saga will be called when action of type '@user/UPDATE_PROFILE_REQUEST' is fired.
 *
 * @param {Object} param0 object which contains the payload.
 */
export function* updateProfile({payload}) {
  try {
    const {name, email, avatar_id, ...rest} = payload.data;

    const profile = {
      name,
      email,
      avatar_id,
      ...(rest.oldPassword ? rest : {}),
    };

    const response = yield call(api.put, 'users', profile);

    Alert.alert('Sucess!', 'Profile updated with success!');

    yield put(updateProfileSuccess(response.data));
  } catch (error) {
    Alert.alert('Error', 'Failure updating your profile');

    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
