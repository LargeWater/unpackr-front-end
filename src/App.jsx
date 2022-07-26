import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
// import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
// import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import * as authService from './services/authService'
import * as profileService from './services/profileService'
import * as lectureService from './services/lectureService'
import AddLecture from './pages/AddLecture/AddLecture'
import BottomNav from './components/BottomNav/BottomNav'
import Index from './pages/LectureIndex/LectureIndex'
import LectureDetails from './pages/LectureDetails/LectureDetails'
import Account from './pages/Account/Account'
import logo from './logo.png'
import EditLecture from './pages/EditLecture/EditLecture'

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
  const handleDeleteLecture = async (id) => {
    console.log("ID", {id})
    const deletedLecture = await lectureService.deleteOne(id)
    setLectures(lectures.filter(lecture => lecture._id !== deletedLecture._id))
  }

  const handleUpdateLecture = async (updatedLectureData) => {
    const updatedLecture = await lectureService.update(updatedLectureData)
    setLectures(lectures.map(lecture => lecture._id === updatedLecture._id ? updatedLecture : lecture))
    navigate('/lectures')
  }
  return (
    <>
      <div className='App'>
      {/* <NavBar user={user} handleLogout={handleLogout} /> */}
      <div className='header'>
        <div className='header-logo'>
          <img src={logo} alt='logo' />
        </div>
      </div>
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
        <Route
          path='/add-lecture'
          element={user ? 
            <AddLecture handleAddLecture={handleAddLecture}/> 
            : <Navigate to="/login" />
          }
          />
        <Route
          path='/lectures'
          element={<Index lectures={lectures} user={user} handleDeleteLecture={handleDeleteLecture}/> }
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
          path="/account"
          element={<Account handleSignupOrLogin={handleSignupOrLogin} handleLogout={handleLogout}/>}
        />
        <Route
          path="/lectures/:id"
          element={<LectureDetails handleDeleteLecture={handleDeleteLecture}/>}
        />
        <Route 
            path='/edit' 
            element={<EditLecture handleUpdateLecture={handleUpdateLecture}/>}/>
      </Routes>
      <BottomNav sx={{ position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}/>
      </div>
    </>
  )
}

export default App
