import IonIcon from "@reacticons/ionicons";
import { userInfo } from "os";
import userDataType from "../types";
import styles from "./UserInfo.module.scss";

const UserInfo: React.FC<{ userInfo: userDataType; setIsOpen: () => void }> = (
  props
) => {
  return (
    <section className={styles.container}>
      <div>
        <button
          className={styles.close}
          onClick={() => {
            props.setIsOpen();
          }}
        >
          <IonIcon name="close-outline" />
        </button>
        <h3>{props.userInfo.name}</h3>
        <div className={styles.info}>
          <p>
            <span>Телефон:</span>
            <span>{props.userInfo.phone}</span>
          </p>
          <p>
            <span>Почта:</span>
            <span>
              <a href={`mailto:${props.userInfo.email}`}>
                {props.userInfo.email}
              </a>
            </span>
          </p>
          <p>
            <span>Дата приема:</span>
            <span>{props.userInfo.hire_date}</span>
          </p>
          <p>
            <span>Дожность:</span>
            <span title={props.userInfo.position_name}>
              {props.userInfo.position_name}
            </span>
          </p>
          <p>
            <span>Подразделение:</span>
            <span title={props.userInfo.department}>
              {props.userInfo.department}
            </span>
          </p>
          <p>
            <span>Дополнительная информация:</span>
            <span>{props.userInfo.address}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default UserInfo;
