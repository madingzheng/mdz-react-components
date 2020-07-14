import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Welcome page', module)
  .add('welcome', () => {
    return (
      <>
        <h1>欢迎来到 mdz 组件库</h1>
        <h3>暂时只有几个组件</h3>
      </>
    )
  }, { info : { disable: true }})