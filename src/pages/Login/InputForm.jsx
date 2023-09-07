import React from 'react';
import { forwardRef } from 'react';
import { InputFormLogin } from './LoginStyles';

export const InputForm = forwardRef((props, ref) => (
  <InputFormLogin {...props} ref={ref} />
));
