import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { InputWrapper, Input, Error } from '../../emotion/ui.style'

const TextForm = ({ questionData, onSubmit }) => {
  const [answer, setAnswer] = useState('')
  const [error, setError] = useState(null)

  const isValidated = () => {
    const { validation } = questionData
    if (validation) {
      if (validation.required && answer.length < 1) {
        setError('This is a required field')
        return false
      }
      // more validation checks can be added here
    }
    return true
  }

  const handleSubmit = () => {
    setError(null)
    if (isValidated()) {
      onSubmit({
        id: questionData.id,
        answer,
      })
    }
  }

  return (
    <InputWrapper>
      <Input
        type='text'
        placeholder={questionData.question}
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        onBlur={handleSubmit}
      />
      {error && <Error>{error}</Error>}
    </InputWrapper>
  )
}

TextForm.propTypes = {
  questionData: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
}

TextForm.defaultProps = {
  questionData: {},
}

export default TextForm
