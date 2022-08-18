import Wrapper from "../assets/wrappers/SmallSidebar"
import {FaTimes} from 'react-icons/fa';
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import { useDispatch,useSelector } from "react-redux";
import { toggleSidebar } from "../features/user/userSlice";
import links from '../utils/Links'

const SmallSidebar = () => {
  const {isSidebarOpen} = useSelector(store => store.user);
  const dispatch = useDispatch();

  const toggle = () => {
    
    dispatch(toggleSidebar())
  }
  return (
    <Wrapper>
        <div className={isSidebarOpen ? 'sidebar-container show-sidebar' : 'sidebar-container'}>
          <div className="content">
            <button className="close-btn" onClick={toggle}>
              <FaTimes/>
            </button>

            <header>
              <Logo/>
            </header>
            <div className="nav-links">
              <NavLinks/>
            </div>

          </div>

        </div>
    </Wrapper>
  )
}

export default SmallSidebar