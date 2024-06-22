import Navigation1 from "../components/navigation1";
import SearchBar from "../components/search-bar";
import WeekContent from "../components/week-content";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import "./admin-add-courses.css";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { Form } from "react-router-dom";

const AdminAddCourses = () => {
  const options = [
    { value: "easy", label: "Easy" },
    { value: "medium", label: "Medium" },
    { value: "hard", label: "Hard" },
  ];

  const toolOptions = [
    { value: "Kali Linux", label: "Kali Linux" },
    { value: "Metasploit", label: "Metasploit" },
    { value: "Nmap", label: "Nmap" },
  ];
  const animatedComponents = makeAnimated();

  return (
    <div className="admin-add-courses1">
      <Navigation1 />
      <main className="user-bar">
        <SearchBar />
        <form>
          <section className="course-editor">
            <div className="course-header">
              <div className="course-info">
                <div className="basic-info">
                  <h3 className="basic-information1">Basic Information</h3>
                </div>
                <div className="name-description">
                  <a className="course-name1">Course Name</a>

                  <input
                    type="text"
                    className="name-description-placeholders"
                    placeholder="Enter course name"
                  ></input>
                </div>
                <div className="name-description1">
                  <a className="description1">Description</a>

                  <textarea
                    className="name-description-child"
                    placeholder="Enter description"
                  ></textarea>
                </div>
              </div>
              <div className="content-header-group">
                <div className="content-header1">
                  <div className="content-title1">
                    <h3 className="content1">Content</h3>
                    <div className="add-new-section-container">
                      <div className="add-new-section1">Add new section</div>
                    </div>
                  </div>
                </div>
                <div className="course-content">
                  <WeekContent />
                  <FrameComponent1 />
                  <FrameComponent1 propPadding="var(--padding-16xl) var(--padding-11xl) var(--padding-5xl) var(--padding-16xl)" />
                </div>
                <div className="add-resource">
                  <div className="add-resource-placeholder" />
                  <img
                    className="plus-math-icon2"
                    loading="lazy"
                    alt=""
                    src="/plus-math@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="course-actions">
              <form className="course-action-buttons">
                <div className="course-image">
                  <div className="course-image-child" />
                  <img
                    className="photo-1618060932014-4deda49325-icon1"
                    loading="lazy"
                    alt=""
                    src="/photo16180609320144deda4932554-3@2x.png"
                  />
                  <div className="trainer-info1">
                    <div className="trainer-name">
                      <div className="trainer-name-input">
                        <a href="#" className="click-to-change1">{`Click to change `}</a>
                      </div>
                      <div className="trainer-label">
                        <div className="trainer1">Trainer</div>

                        <input
                          type="text"
                          className="trainer-image"
                          placeholder="Enter trainer name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="course-level">
                    <div className="level-selector">
                      <div className="level1">Level</div>

                      <Select options={options} className="level-dropdown-1" />
                    </div>
                  </div>
                  <div className="course-tools">
                    <div className="tool-list">
                      <div className="tools1">Tools</div>
                    
                      <Select
                          className="tool-items"
                          closeMenuOnSelect={false}
                          components={animatedComponents}
                          isMulti
                          options={toolOptions}
                        />
                    </div>
                  </div>
                </div>
                <FrameComponent deleteCourse="Delete Course" />
                <FrameComponent
                  deleteCourse="Save"
                  propBackgroundColor="#50c878"
                  propBackgroundColor1="#50c878"
                  propWidth="4.756rem"
                />
              </form>
            </div>
          </section>
        </form>
      </main>
    </div>
  );
};

export default AdminAddCourses;
