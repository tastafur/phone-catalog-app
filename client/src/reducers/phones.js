import {
  ALL_PHONES_SET
} from '../actions/phones';

const initialPhones = {
  phones: {},
  phonesByName: []
};

export function phones(state = initialPhones, action) {
  let nextState;
  switch (action.type) {
    case ALL_PHONES_SET:
      const devicesRaw = action.payload.phones;
      const { devices, devicesById } = normalize(devicesRaw, 'device');

      nextState = {
        devices,
        devicesById
      };
      nextState = {
        phones: {
          ...state.phones,
          [action.payload.phones.DeviceName]: {
            ...action.payload.phones
          }
        },
        phonesByName: [
          ...state.phonesByName,
          action.payload.device.id
        ]
      };
      break;
    default:
      return state;
  }
  return nextState || state;
}
