import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import TextForm from './TextForm'

describe('<TextForm />', () => {
  const initProps = {
    questionData: {
      id: 1,
      question: 'What is your first name?',
      type: 'text',
      validation: {
        required: true,
      },
    },
    onSubmit: jest.fn(),
  }

  describe('@render', () => {
    it('should render the component correctly given initial props', () => {
      const { getByPlaceholderText } = render(<TextForm {...initProps} />)

      expect(getByPlaceholderText(initProps.questionData.question)).toBeTruthy()
    })
  })

  describe('@event', () => {
    it('should render an error if the input does not pass validation', () => {
      const { getByPlaceholderText, getByText } = render(
        <TextForm {...initProps} />
      )

      getByPlaceholderText(initProps.questionData.question).focus()
      fireEvent.blur(getByPlaceholderText(initProps.questionData.question))
      expect(getByText('This is a required field'))
    })

    it('should call onSubmit function if input is correct', () => {
      const { getByPlaceholderText } = render(<TextForm {...initProps} />)

      fireEvent.change(getByPlaceholderText(initProps.questionData.question), {
        target: { value: 'Bruce Wayne' },
      })
      fireEvent.blur(getByPlaceholderText(initProps.questionData.question))
      expect(initProps.onSubmit).toHaveBeenCalledTimes(1)
      expect(initProps.onSubmit).toHaveBeenCalledWith({
        id: initProps.questionData.id,
        answer: 'Bruce Wayne',
      })
    })
  })
})
