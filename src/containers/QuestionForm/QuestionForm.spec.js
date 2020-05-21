import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import QuestionForm from './QuestionForm'

describe('<QuestionForm />', () => {
  const initProps = {
    questions: [
      {
        id: 1,
        question: 'What is your first name?',
        type: 'text',
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
          id: 4,
          question: 'What is your significant other’s name?',
          type: 'text',
        },
      },
    ],
  }

  describe('@render', () => {
    it('should render correctly given the initial props', () => {
      const { getByPlaceholderText } = render(<QuestionForm {...initProps} />)

      expect(getByPlaceholderText(initProps.questions[0].question)).toBeTruthy()
    })
  })

  describe('@event', () => {
    it('should get through the entire user journey correctly', () => {
      const { getByPlaceholderText, getByLabelText, getByText } = render(
        <QuestionForm {...initProps} />
      )

      fireEvent.change(getByPlaceholderText(initProps.questions[0].question), {
        target: { value: 'Peter Parker' },
      })
      fireEvent.blur(getByPlaceholderText(initProps.questions[0].question))

      expect(getByPlaceholderText(initProps.questions[1].question)).toBeTruthy()

      fireEvent.change(getByPlaceholderText(initProps.questions[1].question), {
        target: { value: '27' },
      })
      fireEvent.blur(getByPlaceholderText(initProps.questions[1].question))

      expect(getByText(initProps.questions[2].question)).toBeTruthy()

      fireEvent.click(getByLabelText('Yes'))
      expect(
        getByPlaceholderText(initProps.questions[2].followUpQuestion.question)
      ).toBeTruthy()
      fireEvent.change(
        getByPlaceholderText(initProps.questions[2].followUpQuestion.question),
        {
          target: { value: 'Mary Jane Watson' },
        }
      )
      fireEvent.blur(
        getByPlaceholderText(initProps.questions[2].followUpQuestion.question)
      )

      expect(getByText('SUBMIT')).toBeTruthy()

      fireEvent.click(getByText('SUBMIT'))

      expect(getByText('Form successfully submitted!')).toBeTruthy()
    })
  })
})
