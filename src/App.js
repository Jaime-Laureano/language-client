import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignupForm from "./components/SignupForm";
import NavBar from "./components/NavBar";
import LoginForm from "./components/LoginForm";
import StudentProfilePage from "./pages/StudentProfilePage";
import TeacherProfilePage from "./pages/TeacherProfilePage";
import Practice from "./pages/Practice";
import HomePage from "./pages/HomePage";
import JoinRoom from "./pages/VideoChat";
import MessageBoard from "./pages/MessageBoard";
import EditComment from "./pages/EditComment";
import FindTeacher from "./pages/FindTeacher";
import LogoutPage from "./pages/LogoutPage";
import AddTeacherForm from "./components/AddTeacherForm";
import VideoCall from "./pages/VideoCall";

import {useState} from "react"

function App() {

const [user, setUser] = useState()

	return (
		<div className='App'>
			<NavBar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/signup' element={<SignupForm />} />
				<Route path='/login' element={<LoginForm handleSetUser = {setUser} />} />
				<Route path='/student-profile' element={<StudentProfilePage handleSetUser= {setUser } currentUser = {user}/>} />
				<Route path='/teacher-profile' element={<TeacherProfilePage />} />
				<Route path='/practice' element={<Practice />} />
				<Route path='/video-chat' element={<JoinRoom />} />
				<Route path='/message-board' element={<MessageBoard />} />
				<Route path='/message-board/:comment_id' element={<EditComment />} />
				<Route path='/find-teacher' element={<FindTeacher />} />
				<Route path='/find-teacher/add-teacher' element={<AddTeacherForm />} />
				<Route path='/logout' element={<LogoutPage />} />
				<Route path="/video-call/:id" element={<VideoCall />} />
			</Routes>
		</div>
	);
}

export default App;
