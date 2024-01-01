import React, {useContext, useState} from "react";
import "./Project.scss";
import StyleContext from "../../contexts/StyleContext";
import {Fade} from "react-reveal";
import {openSourceProjects} from "../../portfolio";

export default function Projects() {

  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }
  const {isDark} = useContext(StyleContext);

  const [lightboxOpen, setLightboxOpen] = useState(false);
const [selectedImage, setSelectedImage] = useState(null);

const handleImageClick = (image) => {
  setSelectedImage(image);
  setLightboxOpen(true);
};

const handleCloseLightbox = () => {
  setLightboxOpen(false);
};

    return (
      <Fade bottom duration={1000} distance="20px">
      <div className="main" id="opensource">
        <div>
          <h1 className="skills-heading">{openSourceProjects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {openSourceProjects.subtitle}
          </p>

          <div className="projects-container">
            {openSourceProjects.projects.map((project, i) => {
              return (
                <div
                  key={i}
                  className={
                    isDark
                      ? "dark-mode project-card project-card-dark"
                      : "project-card project-card-light"
                  }
                >
                  {project.image ? (
                    // <div className="project-image">
                    <div className={`project-image ${lightboxOpen ? 'lightbox-open' : ''}`}
                    onClick={() => handleImageClick(project.image)}>
                      <img
                        src={project.image}
                        alt={project.projectName}
                        className="card-image"
                      ></img>
                    </div>
                  ) : null}

{lightboxOpen && selectedImage && (
  <div className="lightbox" onClick={handleCloseLightbox}>
    <img src={selectedImage} alt={project.projectName} />
  </div>
)}
                  <div className="project-detail">
                    <h5
                      className={isDark ? "dark-mode card-title" : "card-title"}
                    >
                      {project.projectName}
                    </h5>
                    <p
                      className={
                        isDark ? "dark-mode card-subtitle" : "card-subtitle"
                      }
                    >
                      {project.projectDesc}
                    </p>
                    {project.footerLink ? (
                      <div className="project-card-footer">
                        {project.footerLink.map((link, i) => {
                          return (
                            <span
                              key={i}
                              className={
                                isDark ? "dark-mode project-tag" : "project-tag"
                              }
                              onClick={() => openUrlInNewTab(link.url)}
                            >
                              {link.name}
                            </span>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
    );
  } 
