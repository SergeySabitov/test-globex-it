import styles from "./User.module.scss";
import IonIcon from "@reacticons/ionicons";
import userDataType from "../types";
const User: React.FC<{
  userInfo: userDataType;
  openModal: (user: userDataType) => void;
}> = (props) => {
  return (
    <div
      className={styles.user_container}
      onClick={() => {
        props.openModal(props.userInfo);
      }}
    >
      <h3>{props.userInfo.name}</h3>
      <p>
        <IonIcon name="phone-portrait-sharp" className={styles.icon} />
        <span>{props.userInfo.phone}</span>
      </p>
      <p>
        <IonIcon name="mail-sharp" className={styles.icon} />{" "}
        <a href={`mailto:${props.userInfo.email}`}>
          <span className={styles.email}>{props.userInfo.email}</span>
        </a>
      </p>
    </div>
  );
};

export default User;
