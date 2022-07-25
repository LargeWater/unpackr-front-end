import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import * as authService from './services/authService'
import * as profileService from './services/profileService'
import * as lectureService from './services/lectureService'
import AddLecture from './pages/AddLecture/AddLecture'
import BottomNav from './components/BottomNav/BottomNav'
import Index from './pages/LectureIndex/LectureIndex'
import LectureDetails from './pages/LectureDetails/LectureDetails'

const App = () => {
  const [lectures, setLectures] = useState([])
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()
  const [profiles, setProfiles] = useState([])

  const handleAddLecture = async (newLectureData) => {
    const newLecture = await lectureService.create(newLectureData)
    setLectures([...lectures, newLecture])
    navigate('/lectures')
  }

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])

  useEffect(() => {
    const fetchLectures = async () => {
      const lectureData = await lectureService.getAll()
      setLectures(lectureData)
    }
    fetchLectures()
  }, [])

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        {/* <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        /> */}
        <Route
          path='/add-lecture'
          element={user ? 
            <AddLecture handleAddLecture={handleAddLecture}/> 
            : <Navigate to="/login" />
          }
          />
        <Route
          path='/lectures'
          element={<Index lectures={lectures} /> }
          />
        <Route
          path="/changePassword"
          element={
            user ? (
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/lectures/:id"
          element={<LectureDetails />}
        />
      </Routes>
      {/* <BottomNav /> */}
    </>
  )
}

export default App
