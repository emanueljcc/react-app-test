/* eslint-env jest */
import { render, screen } from '@testing-library/react'
import { useSelector } from 'react-redux'

import Table from '../../components/Table'
import { useDebounce } from '../../hooks/useDebounce'
import { useGetAllFilesDataQuery } from '../../services'

jest.mock('react-redux', () => ({
  useSelector: jest.fn()
}))

jest.mock('../../services', () => ({
  useGetAllFilesDataQuery: jest.fn()
}))

jest.mock('../../hooks/useDebounce', () => ({
  useDebounce: jest.fn()
}))

describe('Table', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should render loading message when data is loading', () => {
    useSelector.mockReturnValue({ value: 'test' })
    useDebounce.mockReturnValue('test')
    useGetAllFilesDataQuery.mockReturnValue({ data: null, isLoading: true })

    render(<Table />)

    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('should render no data message when there is no data', () => {
    useSelector.mockReturnValue({ value: 'test' })
    useDebounce.mockReturnValue('test')
    useGetAllFilesDataQuery.mockReturnValue({ data: { data: [] }, isLoading: false })

    render(<Table />)

    expect(screen.getByText('No data')).toBeInTheDocument()
  })

  it('should render table with data when there is data', () => {
    const mockData = {
      data: [
        {
          file: 'file1.csv',
          lines: [
            { text: 'line1', number: 1, hex: '0x01' },
            { text: 'line2', number: 2, hex: '0x02' }
          ]
        },
        {
          file: 'file2.csv',
          lines: [
            { text: 'line1', number: 1, hex: '0x01' },
            { text: 'line2', number: 2, hex: '0x02' }
          ]
        }
      ]
    }

    useSelector.mockReturnValue({ value: 'test' })
    useDebounce.mockReturnValue('test')
    useGetAllFilesDataQuery.mockReturnValue({ data: mockData, isLoading: false })

    render(<Table />)

    expect(screen.getByText('File Name')).toBeInTheDocument()
    expect(screen.getByText('Text')).toBeInTheDocument()
    expect(screen.getByText('Number')).toBeInTheDocument()
    expect(screen.getByText('Hex')).toBeInTheDocument()
    expect(screen.getAllByText('file1.csv')[0]).toBeInTheDocument()
    expect(screen.getAllByText('line1')[0]).toBeInTheDocument()
    expect(screen.getAllByText('1')[0]).toBeInTheDocument()
    expect(screen.getAllByText('0x01')[0]).toBeInTheDocument()
    expect(screen.getAllByText('line2')[0]).toBeInTheDocument()
    expect(screen.getAllByText('2')[0]).toBeInTheDocument()
    expect(screen.getAllByText('0x02')[0]).toBeInTheDocument()
    expect(screen.getAllByText('file2.csv')[0]).toBeInTheDocument()
  })
})
