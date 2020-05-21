import styled from '@emotion/styled'

const MainHeading = styled.h1`
  margin: 20px 0;
`

const Input = styled.input`
  padding: 10px 20px;
  margin-bottom: 20px;
  width: 100%;
  border: none;
  border-bottom: 2px solid #ff9800;
  font-size: 20px;
`

const InputWrapper = styled.div`
  text-align: center;
  padding: 0 50px;
`

const Button = styled.button`
  background-color: #009688;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #26a69a;
  }
`

const RequiredField = styled.i`
  line-height: 0;
  color: #f44336;
  font-size: 20px;
`

const RadioLabel = styled.label`
  padding-bottom: 10px;
  display: flex;
  flex: 1;
  justify-content: center;
`

const RadioInput = styled.input`
  margin-right: 10px;
`

const FormFooter = styled.div`
  display: flex;
  justify-content: center;
`

const Error = styled.span`
  color: #f44336;
  font-size: 14px;
  margin: 20px 0;
`

export {
  MainHeading,
  InputWrapper,
  Input,
  Button,
  RequiredField,
  RadioLabel,
  RadioInput,
  FormFooter,
  Error,
}
