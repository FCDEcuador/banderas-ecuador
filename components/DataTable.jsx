import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow, { tableRowClasses } from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import styled from '@emotion/styled'
import classNames from 'classnames'
import { useEffect, useRef } from 'react'

export default function DataTable ({ data, setHasLimit }) {
  const rows = [...data]
  const redColor = ['Posición', 'Entidad contratante', 'Puntaje', 'Total']
  const tableRef = useRef()

  const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
      fontSize: 16,
      color: '#FAFAFA',
      borderBottom: '1px solid #EA5E31!important;'
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 16,
      color: '#FAFAFA',
      border: 0
    }
  }))

  const StyledTableRow = styled(TableRow)(() => ({
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0
    },
    [`&.${tableRowClasses.root}`]: {
      fontSize: 16,
      backgroundColor: '#393E43'
    }
  }))

  const StyledTableRowDark = styled(TableRow)(() => ({
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0
    },
    [`&.${tableRowClasses.root}`]: {
      fontSize: 16,
      backgroundColor: 'rgba(32, 32, 32, 0.95)'
    }
  }))

  useEffect(() => {
    const element = tableRef.current
    const { offsetWidth, scrollWidth } = element
    const limitWidth = scrollWidth - offsetWidth

    const handleScroll = (e) => {
      const { scrollLeft } = e.target

      if ((limitWidth - 5) > scrollLeft) {
        setHasLimit(false)
      } else {
        setHasLimit(true)
      }
    }

    element.addEventListener('scroll', handleScroll)

    return () => element.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <TableContainer ref={tableRef} className='scroll shadow-none scroll-style rounded-none scroll-style relative' component={Paper}>
      <Table sx={{ minWidth: 650 }} size='small' aria-label="data table">
        <TableHead>
          {
            rows.slice(0, 1).map((row, i) => {
              return (
                <StyledTableRow
                  key={`row-${i + 1}`}
                >
                  {
                    Object.values(row).map(({ label }) => <StyledTableCell key={label} className={classNames({ '!text-red': redColor.includes(label) })}>{label}</StyledTableCell>)
                  }
                </StyledTableRow>
              )
            })
          }
        </TableHead>
        <TableBody>
          {
            rows.map((row, i) => {
              return (
                i % 2 === 0
                  ? <StyledTableRow
                    key={`row-${i + 1}`}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    {
                      Object.values(row).map(({ value, label }, j) => {
                        if (j === 1) {
                          return <StyledTableCell className='!text-red' key={j + 1} component="th" scope="row">{value}</StyledTableCell>
                        } else {
                          return <StyledTableCell key={j + 1} align="center" className={classNames({ '!text-red': redColor.includes(label) })}>{typeof value === 'number' && Intl.NumberFormat('es-CO', { currency: 'COP', maximumSignificantDigits: 3 }).format(value)}</StyledTableCell>
                        }
                      })
                    }
                  </StyledTableRow>
                  : <StyledTableRowDark
                    key={`row-${i + 1}`}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    {
                      Object.values(row).map(({ value, label }, j) => {
                        if (j === 1) {
                          return <StyledTableCell className='!text-red' key={j + 1} component="th" scope="row">{value}</StyledTableCell>
                        } else {
                          return <StyledTableCell key={j + 1} align="center" className={classNames({ '!text-red': redColor.includes(label) })}>{typeof value === 'number' && Intl.NumberFormat('es-CO', { currency: 'COP', maximumSignificantDigits: 3 }).format(value)}</StyledTableCell>
                        }
                      })
                    }
                  </StyledTableRowDark>
              )
            })
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}
