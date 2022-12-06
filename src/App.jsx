import React, { lazy, Suspense, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Layout  } from './components/Layout'


import { Loader } from './components/UI/Loader/Loader'
const CamList = lazy(() => import('./pages/CamList/CamList'))
const Statistic = lazy(() => import('./pages/Statistics/Statistics'))


const App = () => {

  const [openCam, setOpenCam] = useState('all')
  const [stream, setStream] = useState(false)

  const camData = [
    {
      id: '1',
      title: 'Камера 1',
      path: `https://dstu-buffets-cams.donstu.ru/video_feed/${stream}`,
      name: 'Буфет 1 корпус 3 этаж',
      cap: 'no'
    },
    {
      id: '2',
      title: 'Камера 2',
      path: 'cam_2',
      name: '',
      cap: 'yes'
    },
    {
      id: '3',
      title: 'Камера 3',
      path: 'cam_3',
      name: '',
      cap: 'yes'
    },
    {
      id: '4',
      title: 'Камера 4',
      path: 'cam_4',
      name: '',
      cap: 'yes'
    },
  ]

  return (
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path='/' element={<Layout data={camData} openCam={openCam} setOpenCam={setOpenCam} />}>
          <Route index element={<CamList data={camData} openCam={openCam} stream={stream} setStream={setStream} />} />
          <Route path={'statistic'} element={<Statistic />} />
          <Route path={'*'} element={<Navigate to={'/'} />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App