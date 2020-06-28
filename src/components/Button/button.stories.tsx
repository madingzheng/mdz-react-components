import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './Button';

const defaultButton = () => (
  <>
    <Button>default</Button>
  </>
);

storiesOf('Button', module)
  .add('默认Button', defaultButton)