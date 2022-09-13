import { useState } from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import ReportCard from '../components/ReportCard'
import reportsData from '../data/reports.json'
import Pagination from '@mui/material/Pagination'

export default function Reports () {
  const [filter, setFilter] = useState('Seleccionar todo')
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const types = [...new Set(reportsData.map(item => item.type).flat())]
  const itemsPerPage = 6

  const scrollTopHandler = (el) => document.querySelector(el).scrollIntoView({ block: 'start', behavior: 'smooth' })

  const handleChange = (event) => {
    setFilter(event.target.value)
    setPage(1)
  }

  const handleQueryChange = (event) => {
    setQuery(event.target.value)
    setPage(1)
  }

  const handlePageChange = (event, value) => {
    setPage(value)
    scrollTopHandler('#reports')
  }

  const filteredData = filter !== 'Seleccionar todo'
    ? reportsData.filter(item => {
      if (Array.isArray(item.type)) {
        return item.type.includes(filter)
      }
      return item.type === filter
    })
      .filter(item => item.title.toLowerCase().includes(query.toLowerCase()))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
    : reportsData.filter(item => item.title.toLowerCase()
      .includes(query.toLowerCase()))
      .sort((a, b) => new Date(b.date) - new Date(a.date))

  const totalPages = Math.ceil(filteredData.length / itemsPerPage)

  return (
    <>
      <div id='reports' className='py-12 lg:py-16 xl:py-20'>
        <div className='mx-auto w-10/12 max-w-screen-2xl'>
          <div className='space-y-8'>
            <div className='max-w-[440px] mx-auto text-center'>
              <h1 className='inline-block font-black text-5xl 3xl:text-[65px]'>
                <span>Informes</span>
                <div className='-mt-3 bg-orange-red bg-opacity-[0.4] h-[23px] w-full'>&nbsp;</div>
              </h1>
              <p>
                En esta sección te compartimos nuestras nuevas publicaciones e informes de investigación
              </p>
            </div>
            <div className='flex flex-col lg:flex-row lg:justify-between items-center gap-y-8'>
              <div className='max-w-[400px] w-full'>
                <div className='space-y-[11px]'>
                  <p className='block font-black 3xl:text-[19px]'>
                    Filtros
                  </p>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Contratación</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={filter}
                        label="Contratación"
                        onChange={handleChange}
                        className="bg-white"
                      >
                        <MenuItem value="Seleccionar todo">Seleccionar todo</MenuItem>
                        {
                          types.map((item, idx) => <MenuItem key={`report-filter-${idx + 1}`} value={item}>{item}</MenuItem>)
                        }
                      </Select>
                    </FormControl>
                  </Box>
                </div>
              </div>
              <div className='max-w-[400px] w-full'>
                <div className='space-y-[11px]'>
                  <p className='block font-black 3xl:text-[19px]'>
                    Búsqueda
                  </p>
                  <Box
                    component="form"
                    sx={{
                      '& > :not(style)': { m: 1, width: '100%' }
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField onChange={handleQueryChange} fullWidth id="outlined-basic" label="Buscar" variant="outlined" />
                  </Box>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-12 2xl:gap-x-[83px] gap-y-[45px]'>
              {
                filteredData.length > 0
                  ? filteredData.slice(((page - 1) * itemsPerPage), itemsPerPage * page).map(({ id, srcImage, title, date, link }) => <ReportCard key={`report-${id + 1}`} id={id} srcImage={srcImage} title={title} date={date} link={link} />)
                  : <div>No hay resultados</div>
              }
            </div>
            {
              filteredData.length > 0 &&
              (
                <div className='flex justify-center'>
                  <Pagination count={totalPages} variant="outlined" page={page} onChange={handlePageChange} />
                </div>
              )
            }
          </div>
        </div>
      </div>
    </>
  )
}
