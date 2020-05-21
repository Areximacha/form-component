import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import NumberForm from './NumberForm'

describe('<NumberForm />', () => {
  const initProps = {
    questionData: {
      id: 2,
      question: 'How old are you?',
      type: 'number',
      validation: {
        min: 18,
        max: 65,
        errorMessage: 'Your age is not within range',
      },
    },
    onSubmit: jest.fn(),
  }

  describe('@render', () => {
    it('should render the component correctly given initial props', () => {
      const { getByPlaceholderText } = render(<NumberForm {...initProps} />)

      expect(getByPlaceholderText(initProps.questionData.question)).toBeTruthy()
    })
  })

  describe('@event', () => {
    it('should render an error if the input does not pass validation', () => {
      const { getByPlaceholderText, getByText } = render(
        <NumberForm {...initProps} />
      )

      getByPlaceholderText(initProps.questionData.question).focus()
      fireEvent.blur(getByPlaceholderText(initProps.questionData.question))
      expect(getByText(initProps.questionData.validation.errorMessage))
    })

    it('should call onSubmit function if input is correct', () => {
      const { getByPlaceholderText } = render(<NumberForm {...initProps} />)

      fireEvent.change(getByPlaceholderText(initProps.questionData.question), {
        target: { value: '24' },
      })
      fireEvent.blur(getByPlaceholderText(initProps.questionData.question))
      expect(initProps.onSubmit).toHaveBeenCalledTimes(1)
      expect(initProps.onSubmit).toHaveBeenCalledWith({
        id: initProps.questionData.id,
        answer: '24',
      })
    })
  })
})
