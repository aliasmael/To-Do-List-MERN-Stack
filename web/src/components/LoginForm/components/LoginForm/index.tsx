import * as React from 'react'
import { reduxForm, InjectedFormProps } from 'redux-form'
import { RaisedButton, TextField } from 'material-ui'
import Field from 'redux-form/lib/Field'

const renderTextField = (props: any) => (
  <TextField
    hintText={props.label}
    floatingLabelText={props.label}
    type={props.type}
    {...props.input}
  />
)

const LoginForm = (props: InjectedFormProps) => (
  <form>
    <div>
      <Field name="username" component={renderTextField} label="Username" />
    </div>

    <div>
      <Field name="password" component={renderTextField} label="password" type="password"/>
    </div>

    <div style={{ display: "flex", justifyContent: "center" }}>
      <RaisedButton type="submit" label="Login" onClick={props.handleSubmit} primary />
    </div>
  </form>
);

// Decorate with redux-form
export default reduxForm({
  form: 'loginForm'
})(LoginForm)