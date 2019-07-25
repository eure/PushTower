import * as React from 'react'

import { Button, EditableText, IButtonProps } from '@blueprintjs/core'

const SendButton = (props: IButtonProps) => (
  <Button intent="none" {...props}>
    Send
  </Button>
)

type FormViewProps = {}

type FormViewState = {}

class FormView extends React.Component<FormViewProps, FormViewState> {
  private send = () => {
    console.log('click', this)
  }

  render() {
    return (
      <div>
        <h1>Push Tower</h1>
        <h2>
          <EditableText placeholder="Device Token" />
        </h2>
        <h2>
          <EditableText placeholder="Topic (Bundle Identifier)" />
        </h2>
        <p>
          <EditableText placeholder="Payload (JSON)" multiline={true} />
        </p>
        <div>
          <SendButton onClick={this.send} />
        </div>
      </div>
    )
  }
}

export default FormView
