import React, { useState } from 'react'
import PropTypes from 'prop-types'

import TextForm from '../TextForm/TextForm'

import { InputWrapper, RadioLabel, RadioInput } from '../../emotion/ui.style'
import { QuestionText, RadioWrapper } from './RadioForm.style'

const RadioForm = ({ questionData, onSubmit }) => {
  const [radioOption, setRadioOption] = useState(undefined)
  const [optionalQuestion, setOptionalQuestion] = useState(false)

  const handleOptionChange = (e) => {
    setRadioOption(e.target.value === 'yes')
    if (questionData.followUpQuestion) {
      setOptionalQuestion(e.target.value === 'yes')
    }
    if (e.target.value === 'no')
      onSubmit({ id: questionData.id, answer: false })
  }

  const handleOptionalQuestionSubmit = (data) => {
    onSubmit({
      id: questionData.id,
      answer: true,
      optionalAnswer: data,
    })
  }

  return (
    <InputWrapper>
      <QuestionText>{questionData.question}</QuestionText>
      <RadioWrapper>
        <RadioLabel>
          <RadioInput
            type='radio'
            value='yes'
            checked={radioOption === true}
            onChange={handleOptionChange}
          />
          <span>Yes</span>
        </RadioLabel>
        <RadioLabel>
          <RadioInput
            type='radio'
            value='no'
            checked={radioOption === false}
            onChange={handleOptionChange}
          />
          <span>No</span>
        </RadioLabel>
      </RadioWrapper>
      {optionalQuestion && (
        <TextForm
          questionData={questionData.followUpQuestion}
          onSubmit={(data) => handleOptionalQuestionSubmit(data)}
        />
      )}
    </InputWrapper>
  )
}

RadioForm.propTypes = {
  questionData: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
}

RadioForm.defaultProps = {
  questionData: {},
}

export default RadioForm
