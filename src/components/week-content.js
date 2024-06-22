import PropTypes from "prop-types";
import "./week-content.css";

const WeekContent = ({ className = "" }) => {
  return (
    <div className={`week-content ${className}`}>
      <div className="resource-list">
        <div className="resource-list-child" />
        <div className="resource-item">
          <div className="resource-icons">
            <img
              className="chevron-up-icon"
              loading="lazy"
              alt=""
              src="/chevron-up@2x.png"
            />
            <div className="resource-description">
              <div className="week-1-">Week 1 - Introduction</div>
            </div>
          </div>
          <div className="resource-icons1">
            <img
              className="google-docs-icon1"
              loading="lazy"
              alt=""
              src="/google-docs@2x.png"
            />
            <div className="lorem-ipsum-dolor-sit-amet-frame">
              <div className="lorem-ipsum-dolor3">
                Lorem ipsum dolor sit amet
              </div>
            </div>
          </div>
          <div className="resource-icons2">
            <img
              className="circled-play-icon1"
              loading="lazy"
              alt=""
              src="/circled-play@2x.png"
            />
            <div className="frame-div">
              <div className="lorem-ipsum-dolor4">
                Lorem ipsum dolor sit amet
              </div>
            </div>
          </div>
          <div className="resource-icons3">
            <img
              className="imac-icon1"
              loading="lazy"
              alt=""
              src="/imac@2x.png"
            />
            <div className="lorem-ipsum-dolor-sit-amet-wrapper1">
              <div className="lorem-ipsum-dolor5">
                Lorem ipsum dolor sit amet
              </div>
            </div>
          </div>
        </div>
        <img className="edit-icon" loading="lazy" alt="" src="/edit@2x.png" />
      </div>
    </div>
  );
};

WeekContent.propTypes = {
  className: PropTypes.string,
};

export default WeekContent;
