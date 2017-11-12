import React from 'react'
import { Button } from 'semantic-ui-react'

const ButtonExampleButton = () => (
  <Button
    color='blue'
    content='Play the Game'
    icon='soccer'
    label={{ basic: true, color: 'red', pointing: 'left', content: '2,048' }}
  />
)

export default ButtonExampleButton