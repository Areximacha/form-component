import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import RadioForm from './RadioForm'

describe('<RadioForm />', () => {
  const initProps = {
    questionData: {
      id: 3,
      question: 'Do you have a significant other?',
      type: 'radio',
      followUpQuestion: {
        id: 4,
        question: 'What is your significant other’s name?',
        type: 'text',
      },
    },
    onSubmit: jest.fn(),
  }

  describe('@render', () => {
    it('should render the component correctly given initial props', () => {
      const { getByText } = render(<RadioForm {...initProps} />)

      expect(getByText(initProps.questionData.question)).toBeTruthy()
    })
  })

  describe('@event', () => {
    it('should call onSubmit function if No option is clicked', () => {
      const { getByLabelText } = render(<RadioForm {...initProps} />)

      fireEvent.click(getByLabelText('No'))
      expect(initProps.onSubmit).toHaveBeenCalledTimes(1)
      expect(initProps.onSubmit).toHaveBeenCalledWith({
        id: initProps.questionData.id,
        answer: false,
      })
    })

    it('should render optional question function if Yes option is clicked', () => {
      const { getByLabelText, getByPlaceholderText } = render(
        <RadioForm {...initProps} />
      )

      fireEvent.click(getByLabelText('Yes'))
      expect(
        getByPlaceholderText(initProps.questionData.followUpQuestion.question)
      ).toBeTruthy()
      fireEvent.change(
        getByPlaceholderText(initProps.questionData.followUpQuestion.question),
        {
          target: { value: 'Selina Kyle' },
        }
      )
      fireEvent.blur(
        getByPlaceholderText(initProps.questionData.followUpQuestion.question)
      )
      expect(initProps.onSubmit).toHaveBeenCalledTimes(1)
      expect(initProps.onSubmit).toHaveBeenCalledWith({
        id: initProps.questionData.id,
        answer: true,
        optionalAnswer: {
          id: initProps.questionData.followUpQuestion.id,
          answer: 'Selina Kyle',
        },
      })
    })
  })
})
