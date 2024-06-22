import { useMemo } from "react";
import PropTypes from "prop-types";
import "./frame-component.css";

const FrameComponent = ({
  className = "",
  deleteCourse,
  propBackgroundColor,
  propBackgroundColor1,
  propWidth,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const rectangleDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const deleteCourseStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={`rectangle-parent2 ${className}`}>
      <div className="frame-child1" />
      <div className="group-div" style={groupDivStyle}>
        <div className="frame-child2" style={rectangleDivStyle} />
        <div className="delete-course" style={deleteCourseStyle}>
          {deleteCourse}
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  deleteCourse: PropTypes.string,

  /** Style props */
  propBackgroundColor: PropTypes.any,
  propBackgroundColor1: PropTypes.any,
  propWidth: PropTypes.any,
};

export default FrameComponent;
