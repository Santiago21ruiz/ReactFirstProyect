import DarkMode from '../../UI/DarkMode/DarkMode'
import { NavHome } from '../../UI/NavHome/NavHome'

export const HeaderHome = () => {
  
  return (
    <div className='section'>
        <NavHome></NavHome>
        <div className="modeDark">
          <p>Dark Mode</p>
          <DarkMode></DarkMode>
        </div>
    </div>
  )
}
