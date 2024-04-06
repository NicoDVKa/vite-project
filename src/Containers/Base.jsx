import Footer from "../Components/Footer/Footer"
import NavBar from "../Components/NavBar/NavBar"
import {Outlet} from 'react-router-dom'

const Base = () => {
    console.log('base');
  return (
    <div style={styles.base}>
        <NavBar/>
        <Outlet />
        <Footer />
    </div>
  )
}

const styles = {
    base : {
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between',
        gap: '1rem'
    }
  }

export default Base