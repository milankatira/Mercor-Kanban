import styles from "./BoxContent.module.css";
const BoxContent = () => {
  return (
    <div className={styles.caradOnboarding}>
      <img
        className={styles.unsplashmicqqgydq6wIcon}
        alt=""
        src="/unsplashmicqqgydq6w@2x.png"
      />
      <div className={styles.peopleOnprogress}>
        <button className={styles.vuesaxlinearfolder2Parent}>
          <img
            className={styles.vuesaxlinearfolder2Icon}
            alt=""
            src="/vuesaxlinearfolder23.svg"
          />
          <img
            className={styles.vuesaxoutlinemessageIcon}
            alt=""
            src="/vuesaxoutlinemessage3.svg"
          />
          <div className={styles.comments}>14 comments</div>
          <div className={styles.files}>15 files</div>
        </button>
        <img
          className={styles.peopleOnprogressChild}
          alt=""
          src="/ellipse-151@2x.png"
        />
        <img
          className={styles.peopleOnprogressItem}
          alt=""
          src="/ellipse-131@2x.png"
        />
        <img
          className={styles.peopleOnprogressInner}
          alt=""
          src="/ellipse-121@2x.png"
        />
      </div>
      <div
        className={styles.onboardingIllustrations}
      >{`Onboarding Illustrations `}</div>
      <button className={styles.button}>. . .</button>
      <div className={styles.priorityLow}>
        <div className={styles.low}>Low</div>
      </div>
    </div>
  );
};

export default BoxContent;
