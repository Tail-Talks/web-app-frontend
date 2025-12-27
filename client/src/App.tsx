
import './App.css'
import PersonalProfile from './Components/PersonalProfile/PersonalProfile';
// import Footer from './Components/Footer/Footer'
// import Header from './Components/Header/Header'
// import LoginUserForm from './Components/LoginUserForm/LoginUserForm'
// import ProfileDescriptionForm from './Components/ProfileDescriptionForm/ProfileDescriptionForm'
// import UserName from './Components/UserName/UserName'
import LoginPage from './Pages/LoginPage/LoginPage'
function App() {
  return (
    <>
      {/* <Header/> */}
      <LoginPage />
      {/* <Footer/> */}
      {/* <UserName/>
    <ProfileDescriptionForm/>
    <LoginUserForm/> */}
    <PersonalProfile />
    </>
  );
}

export default App;
