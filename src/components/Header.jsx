import MarketIcon from './Icons/MarketIcon.jsx'
import UserIcon from './Icons/UserIcon.jsx';
import {Link} from 'react-router-dom'                                                                                        
const Header = ({login, register})=> {
    return (
      <div className="header">
        <div className="company-name">
          <MarketIcon />
          <p>Marketplace</p>
        </div>

        <div className="company-name">
          <UserIcon/>
          <Link to="/LoginPage">{login}</Link>
        </div>
      </div>
    );
}

export default Header;