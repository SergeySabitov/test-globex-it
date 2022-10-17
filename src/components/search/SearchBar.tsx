import IonIcon from "@reacticons/ionicons";
import { useEffect, useState } from "react";
import styles from "./SearchBar.module.scss";
const SearchBar: React.FC<{ fetchUsers: (userInput: string) => void }> = (
  props
) => {
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      props.fetchUsers(userInput);
    }, 300);
    return () => {
      clearTimeout(timerId);
    };
  }, [userInput]);

  const onChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setUserInput(event.currentTarget.value);
  };

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Sabitov Sergey"
        onChange={onChangeHandler}
      />
      <IonIcon name="search-outline" className={styles.icon} />
    </div>
  );
};

export default SearchBar;
