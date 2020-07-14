import React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'

import { Alert } from './Alert'

const defaultAlert = () => (
  <Alert title="default Alert">default Alert </Alert>
)

const AlertWithType = () => (
  <>
    <Alert title=" default Alert"> default Alert </Alert>
    <Alert title=" danger Alert" alertType="danger"> danger Alert </Alert>
    <Alert title=" success Alert" alertType="success"> success Alert </Alert>
    <Alert title=" warning Alert" alertType="warning"> warning Alert </Alert>
  </>
)

const AlertWithDescription = () => (
  <>
    <Alert title=" default Alert" alertType="danger" description="Danger!!!"> default Alert </Alert>
  </>
)
storiesOf('Alert Component', module)
  .add('Alert', defaultAlert)
  .add('不同类型的Alert', AlertWithType)
  .add('有描述的Alert', AlertWithDescription)
