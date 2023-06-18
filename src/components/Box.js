import { useMemo } from "react";
import styles from "./Box.module.css";
const Box = ({
  peopleBrainstormingGap,
  group633,
  group633Width,
  vuesaxoutlinemessage,
  comments,
  vuesaxlinearfolder2,
  files,
  brainstorming,
  brainstormingTop,
  propTop,
  brainstormingBringsTeamMe,
  priorityLowTop,
  priorityLowLeft,
  priorityLowBackgroundColor,
  low,
  lowColor,
  frame629Width,
  frameWidth,
  cardBrainstormingOverflow,
  cardBrainstormingFlexShrink,
  frameWidth1,
  brainstormingBringsTeamMeColor,
  priorityLowWidth,
}) => {
  const peopleBrainstormingStyle = useMemo(() => {
    return {
      gap: peopleBrainstormingGap,
    };
  }, [peopleBrainstormingGap]);

  const groupIconStyle = useMemo(() => {
    return {
      width: group633Width,
    };
  }, [group633Width]);

  const brainstormingStyle = useMemo(() => {
    return {
      top: brainstormingTop,
    };
  }, [brainstormingTop]);

  const buttonStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const priorityLowStyle = useMemo(() => {
    return {
      top: priorityLowTop,
      left: priorityLowLeft,
      backgroundColor: priorityLowBackgroundColor,
      width: priorityLowWidth,
    };
  }, [
    priorityLowTop,
    priorityLowLeft,
    priorityLowBackgroundColor,
    priorityLowWidth,
  ]);

  const lowStyle = useMemo(() => {
    return {
      color: lowColor,
    };
  }, [lowColor]);

  const frameButtonStyle = useMemo(() => {
    return {
      width: frame629Width,
    };
  }, [frame629Width]);

  const frameStyle = useMemo(() => {
    return {
      width: frameWidth,
    };
  }, [frameWidth]);

  const cardBrainstormingStyle = useMemo(() => {
    return {
      overflow: cardBrainstormingOverflow,
      flexShrink: cardBrainstormingFlexShrink,
    };
  }, [cardBrainstormingOverflow, cardBrainstormingFlexShrink]);

  const frame1Style = useMemo(() => {
    return {
      width: frameWidth1,
    };
  }, [frameWidth1]);

  const brainstormingBringsTeamStyle = useMemo(() => {
    return {
      color: brainstormingBringsTeamMeColor,
    };
  }, [brainstormingBringsTeamMeColor]);

  return (
    <div className={styles.cardBrainstorming} style={cardBrainstormingStyle}>
      <div
        className={styles.peopleBrainstorming}
        style={peopleBrainstormingStyle}
      >
        <img
          className={styles.peopleBrainstormingChild}
          alt=""
          src={group633}
          style={groupIconStyle}
        />
        <button className={styles.frameParent} style={frameButtonStyle}>
          <div className={styles.frame} style={frameStyle}>
            <img
              className={styles.vuesaxoutlinemessageIcon}
              alt=""
              src={vuesaxoutlinemessage}
            />
            <div className={styles.comments}>{comments}</div>
          </div>
          <div className={styles.frame1} style={frame1Style}>
            <img
              className={styles.vuesaxoutlinemessageIcon}
              alt=""
              src={vuesaxlinearfolder2}
            />
            <div className={styles.comments}>{files}</div>
          </div>
        </button>
      </div>
      <div className={styles.brainstorming} style={brainstormingStyle}>
        {brainstorming}
      </div>
      <button className={styles.button} style={buttonStyle}>
        . . .
      </button>
      <div
        className={styles.brainstormingBringsTeam}
        style={brainstormingBringsTeamStyle}
      >
        {brainstormingBringsTeamMe}
      </div>
      <div className={styles.priorityLow} style={priorityLowStyle}>
        <div className={styles.low} style={lowStyle}>
          {low}
        </div>
      </div>
    </div>
  );
};

export default Box;
