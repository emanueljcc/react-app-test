import { useMemo } from 'react'
import { Table as TableBootstrap } from 'react-bootstrap'
import { useGetAllFilesDataQuery } from '../services'
import { useSelector } from 'react-redux'

import { useDebounce } from '../hooks/useDebounce'

const Table = () => {
  const { value: queryParamVal } = useSelector(state => state.queryParam)

  const searchQuery = useDebounce(queryParamVal, 300)

  const { data, isLoading } = useGetAllFilesDataQuery(searchQuery)

  const isNoData = useMemo(() => data?.data.every(r => r === null), [data])

  if (isLoading) {
    return <p className='h5 text-center mt-5'>Loading...</p>
  }

  if (isNoData) {
    return <p className='h5 text-center mt-5'>No data</p>
  }

  return (
    <TableBootstrap striped bordered hover responsive>
      <thead>
        <tr className='table-tr-custom'>
          <th>File Name</th>
          <th>Text</th>
          <th>Number</th>
          <th>Hex</th>
        </tr>
      </thead>
      <tbody>
        {data?.data.length && data?.data.map(res => (
          res?.lines.map((el, i) => (
            <tr key={i}>
              <td>{res.file}</td>
              <td>{el.text}</td>
              <td>{el.number}</td>
              <td>{el.hex}</td>
            </tr>
          ))
        ))}
      </tbody>
    </TableBootstrap>
  )
}

export default Table
