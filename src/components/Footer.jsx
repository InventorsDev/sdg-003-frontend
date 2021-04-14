import {Link} from 'react-router-dom'


const Footer = ({ hint,link }) => {
  return (
    <div className="footer">
      <hr />

      {/* <div class="auth">
        <div className="facebook-btn btn">Facebook</div>
        <p>Or</p>
        <div className="google-btn btn">Google</div>
      </div> */}

      <span>{hint}</span>
      <Link to="/LoginPage">{link}</Link>
    </div>
  );
};

export default Footer;
