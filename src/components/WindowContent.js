import styles from "./WindowContent.module.css";
import { useEffect, useRef } from "react";
const ProjectMContainer = (props) => {

  const handleButtonClick = () => {
    props.setMenuVisible(false);
  };
  useEffect(() => {
    const handleViewportChange = (event) => {
      props.setMenuVisible(!event.matches);
    };

    const mediaQuery = window.matchMedia('(max-width: 1400px)');
    mediaQuery.addEventListener('change', handleViewportChange);

    // Check initial viewport width
    props.setMenuVisible(!mediaQuery.matches);

    return () => {
      mediaQuery.removeEventListener('change', handleViewportChange);
    };
  }, []);
  return (
    props.isMenuVisible &&
    <div id="menu" className={styles.menuContainer}>
      <div className={styles.header}>
        <div className={styles.websiteicon}>
          <img
            className={styles.colorfilterIcon}
            alt=""
            src="/colorfilter.svg"
          />
          <div className={styles.projectM}>Project M.</div>
        </div>
        <button className={styles.leftmenuBtn} onClick={handleButtonClick}>
          <img
            className={styles.vuesaxoutlinearrowLeftIcon}
            alt=""
            src="/vuesaxoutlinearrowleft.svg"
          />
          <img
            className={styles.vuesaxoutlinearrowLeftIcon1}
            alt=""
            src="/vuesaxoutlinearrowleft.svg"
          />
        </button>
      </div>
      <div className={styles.brline} />
      <button className={styles.homeBtn}>
        <img className={styles.colorfilterIcon} alt="" src="/category.svg" />
        <div className={styles.home}>Home</div>
      </button>
      <button className={styles.homeBtn}>
        <img className={styles.colorfilterIcon} alt="" src="/message.svg" />
        <div className={styles.home}>Messages</div>
      </button>
      <button className={styles.homeBtn}>
        <img className={styles.colorfilterIcon} alt="" src="/tasksquare.svg" />
        <div className={styles.home}>Tasks</div>
      </button>
      <button className={styles.homeBtn}>
        <img className={styles.colorfilterIcon} alt="" src="/profile.svg" />
        <div className={styles.home}>Members</div>
      </button>
      <button className={styles.homeBtn}>
        <img className={styles.colorfilterIcon} alt="" src="/settings.svg" />
        <div className={styles.home}>Settings</div>
      </button>
      <div className={styles.brline} />
      <div className={styles.myprojects}>
        <b className={styles.myProjects}>my projects</b>
        <button className={styles.addProject}>
          <img
            className={styles.vuesaxlinearaddSquareIcon}
            alt=""
            src="/addproject.svg"
          />
        </button>
      </div>
      <div className={styles.mobileApp}>
        <div className={styles.div}>. . .</div>
        <div className={styles.mobileApp1}>Mobile App</div>
        <div className={styles.mobileAppChild} />
      </div>
      <button className={styles.webstiteRedesign}>
        <div className={styles.webstiteRedesignChild} />
        <div className={styles.home}>Website Redesign</div>
      </button>
      <button className={styles.designSystem}>
        <div className={styles.designSystemChild} />
        <div className={styles.home}>Design System</div>
      </button>
      <button className={styles.wireframes}>
        <div className={styles.wireframesChild} />
        <div className={styles.home}>Wireframes</div>
      </button>
      <div className={styles.thoughtsContainer}>
        <img className={styles.unionIcon} alt="" src="/union.svg" />
        <button className={styles.writeMsgBtn}>
          <div className={styles.writeAMessage}>Write a message</div>
        </button>
        <div className={styles.frame}>
          <div className={styles.weDontHave}>
            We don’t have any notice for you, till then you can share your
            thoughts with your peers.
          </div>
        </div>
        <div className={styles.thoughtsTime}>Thoughts Time</div>
        <img className={styles.lampOnIcon} alt="" src="/lampon.svg" />
        <img
          className={styles.lampShadow}
          alt=""
          src="/ellipse-20.svg"
        />
      </div>
    </div>
  );
};

export default ProjectMContainer;
