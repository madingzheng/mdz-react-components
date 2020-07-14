import React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'

import { Icon } from './Icon'

const defaultIcon = () => (
  <>
    <Icon
      icon="check"
      size="3x"
    />
    <Icon
      icon="times"
      size="3x"
    />
    <Icon
      icon="anchor"
      size="3x"
    />
    <Icon
      icon="trash"
      size="3x"
    />
  </>
)

const IconWithSize = () => (
  <>
    <Icon icon="coffee" size="lg">lg Icon</Icon>
    <Icon icon="coffee" size="sm">sm Icon</Icon>
    <Icon icon="coffee" size="xs">xs Icon</Icon>
  </>
);

const IconWithThemeProps = () => (
  <>
    <Icon icon="coffee" size="lg" theme="danger">lg Icon</Icon>
    <Icon icon="coffee" size="lg" theme="dark">lg Icon</Icon>
    <Icon icon="coffee" size="lg" theme="info">lg Icon</Icon>
    <Icon icon="coffee" size="lg" theme="light">lg Icon</Icon>
    <Icon icon="coffee" size="lg" theme="success">lg Icon</Icon>
    <Icon icon="coffee" size="lg" theme="warning">lg Icon</Icon>

  </>
);

storiesOf('Icon Component', module)
  .add('Icon', defaultIcon)
  .add('Icon Size', IconWithSize)
  .add('Icon Theme', IconWithThemeProps)