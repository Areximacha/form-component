import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import TextForm from '../../components/TextForm/TextForm'
import NumberForm from '../../components/NumberForm/NumberForm'
import RadioForm from '../../components/RadioForm/RadioForm'
import Success from '../../components/Success/Success'

import { Button, FormFooter } from '../../emotion/ui.style'

const formMap = {
  text: TextForm,
  number: NumberForm,
  radio: RadioForm,
}

const ContentWrapper = styled.div`
  padding: 40px 0;
`

const QuestionForm = ({ questions }) => {
  const [questionIndex, setQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState([])
  const [showSubmit, setShowSubmit] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmitForm = () => {
    // Here is where we'd dispatch an action to send the form data to wherever
    console.log(answers)
    setFormSubmitted(true)
  }

  const handleQuestionSubmit = (data) => {
    if (questionIndex + 1 < questions.length) {
      setQuestionIndex(questionIndex + 1)
    }
    if (questionIndex + 1 === questions.length) setShowSubmit(true)
    if (questions.length === answers.length) {
      const replaceArray = answers
      replaceArray.pop()
      setAnswers([...replaceArray, data])
    } else {
      setAnswers([...answers, data])
    }
  }

  const renderContent = () => {
    const questionNode = questions[questionIndex]
    const FormComponent = formMap[questionNode.type]

    return (
      <FormComponent
        questionData={questionNode}
        onSubmit={handleQuestionSubmit}
      />
    )
  }

  if (formSubmitted)
    return (
      <ContentWrapper>
        <Success />
      </ContentWrapper>
    )

  return (
    <ContentWrapper>
      {renderContent()}
      {showSubmit && (
        <FormFooter>
          <Button onClick={handleSubmitForm}>SUBMIT</Button>
        </FormFooter>
      )}
    </ContentWrapper>
  )
}

QuestionForm.propTypes = {
  questions: PropTypes.array.isRequired,
}

export default QuestionForm
