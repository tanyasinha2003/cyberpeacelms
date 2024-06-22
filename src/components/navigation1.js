import PropTypes from "prop-types";
import "./navigation1.css";

const Navigation1 = ({ className = "" }) => {
  return (
    <div className={`navigation ${className}`}>
      <div className="navigation-child" />
      <h3 className="cyber-peace-foundation1">Cyber Peace Foundation</h3>
      <div className="top-menu">
        <div className="home-menu">
          <div className="dashboard-wrapper">
            <h3 className="dashboard1">Dashboard</h3>
          </div>
          <div className="courses-menu-parent">
            <div className="courses-menu">
              <div className="courses-submenu1">
                <div className="courses-submenu-child" />
                <div className="courses1">Courses</div>
              </div>
              <div className="community-submenu">
                <h3 className="community1">Community</h3>
              </div>
            </div>
            <div className="calendar-wrapper">
              <h3 className="calendar1">{`Calendar `}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Navigation1.propTypes = {
  className: PropTypes.string,
};

export default Navigation1;
