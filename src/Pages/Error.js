import {Link} from 'react-router-dom';
import img from '../assets/images/not-found.svg'
import Wrapper from '../assets/wrappers/ErrorPage';

const Error = () => {
  return (
    <Wrapper className='full-page'>
        <div>
            <img src={img} alt='not found'></img>
            <h3>ohh! Page Not Found</h3>
            <p>We Can't seem to find a page you're looking for</p>
            <Link to='/'>back home</Link>
        </div>

    </Wrapper>
  )
}

export default Error