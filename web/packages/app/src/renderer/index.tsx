import * as ReactDOM from 'react-dom'
import React from 'react'

import FormView from './FormView'

import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'

const AppFrame = () => (
  <div>
    <FormView />
  </div>
)

ReactDOM.render(<AppFrame />, document.getElementById('app'))
