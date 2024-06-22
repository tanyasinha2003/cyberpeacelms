import { useMemo } from "react";
import PropTypes from "prop-types";
import "./frame-component1.css";

const FrameComponent1 = ({ className = "", propPadding }) => {
  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={`rectangle-parent1 ${className}`} style={frameDivStyle}>
      <div className="rectangle-div" />
      <div className="chevron-up-parent">
        <img className="chevron-up-icon1" alt="" src="/chevron-up-1@2x.png" />
        <div className="week-2-malware-wrapper">
          <div className="week-2-">Week 2 - Malware</div>
        </div>
      </div>
      <div className="edit-wrapper">
        <img className="edit-icon1" alt="" src="/edit@2x.png" />
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
};

export default FrameComponent1;
