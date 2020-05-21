import React from 'react'

import Layout from '../../components/Layout'

import QuestionFormContainer from '../../containers/QuestionForm/QuestionForm'

import { MainHeading } from '../../emotion/ui.style'

// Mock props to populate form
const testProps = {
  questions: [
    {
      id: 1,
      question: 'What is your first name?',
      type: 'text',
      validation: {
        required: true,
      },
    },
    {
      id: 2,
      question: 'How old are you?',
      type: 'number',
      validation: {
        min: 18,
        max: 65,
        errorMessage: 'Your age is not within range',
      },
    },
    {
      id: 3,
      question: 'Do you have a significant other?',
      type: 'radio',
      followUpQuestion: {
        question: 'What is your significant other’s name?',
        type: 'text',
      },
    },
  ],
}

const QuestionForm = () => (
  <Layout>
    <MainHeading>Questions</MainHeading>
    <QuestionFormContainer {...testProps} />
  </Layout>
)

export default QuestionForm
