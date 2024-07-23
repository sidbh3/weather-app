import React from 'react';
import { observer } from 'mobx-react-lite';
import WeatherStore from '../store/WeatherStore';

const ErrorMessage = observer(() => {
  const { error } = WeatherStore;

  if (!error) return null;

  return <div className="error-message">{error}</div>;
});

export default ErrorMessage;
