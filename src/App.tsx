import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import styles from "./App.module.scss";
import SearchBar from "./components/search/SearchBar";
import User from "./components/User/User";
import UserInfo from "./components/User/UserInfo";
import userDataType from "./components/types";

const URL = "http://127.0.0.1:3000";

const TEMP_DATA = [
  {
    name: "Ferdinand Carney",
    phone: "(640) 447-3254",
    email: "in@aol.net",
    address: "563-4648 Curabitur Street",
    position_name:
      "Mauris eu turpis. Nulla aliquet. Proin velit. Sed malesuada augue",
    department:
      "nisi magna sed dui. Fusce aliquam, enim nec tempus scelerisque,",
    hire_date: "Dec 24, 2020",
  },
  {
    name: "Deborah Gonzales",
    phone: "1-258-431-9358",
    email: "hendrerit@icloud.net",
    address: "705 Pede Avenue",
    position_name:
      "dui nec urna suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum",
    department:
      "Phasellus dapibus quam quis diam. Pellentesque habitant morbi tristique senectus",
    hire_date: "Oct 25, 2020",
  },
  {
    name: "Adrienne Mason",
    phone: "1-395-514-3388",
    email: "erat.eget.ipsum@icloud.ca",
    address: "963 Montes, Avenue",
    position_name:
      "diam eu dolor egestas rhoncus. Proin nisl sem, consequat nec,",
    department:
      "interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac",
    hire_date: "Nov 15, 2020",
  },
  {
    name: "Jonas Simon",
    phone: "1-886-528-2605",
    email: "at.augue.id@icloud.org",
    address: "Ap #746-9362 Egestas Street",
    position_name:
      "faucibus leo, in lobortis tellus justo sit amet nulla. Donec",
    department:
      "montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique",
    hire_date: "Jan 23, 2021",
  },
  {
    name: "April Faulkner",
    phone: "1-773-867-6849",
    email: "tristique.pellentesque@aol.net",
    address: "101-9945 Magna St.",
    position_name:
      "ac mi eleifend egestas. Sed pharetra, felis eget varius ultrices,",
    department:
      "lectus. Cum sociis natoque penatibus et magnis dis parturient montes,",
    hire_date: "Dec 28, 2020",
  },
  {
    name: "Demetrius Church",
    phone: "(451) 793-8149",
    email: "erat.eget@aol.ca",
    address: "P.O. Box 251, 1167 Odio. St.",
    position_name:
      "ultrices posuere cubilia Curae Donec tincidunt. Donec vitae erat vel",
    department:
      "Suspendisse ac metus vitae velit egestas lacinia. Sed congue, elit",
    hire_date: "Jan 26, 2021",
  },
  {
    name: "Giselle Poole",
    phone: "(212) 422-5714",
    email: "ullamcorper.duis@protonmail.edu",
    address: "Ap #653-2069 Donec Av.",
    position_name:
      "penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean",
    department:
      "et, rutrum non, hendrerit id, ante. Nunc mauris sapien, cursus",
    hire_date: "Nov 24, 2020",
  },
  {
    name: "Harding Bernard",
    phone: "1-717-186-7936",
    email: "ut.dolor@outlook.net",
    address: "Ap #978-6038 Eu Rd.",
    position_name:
      "tincidunt adipiscing. Mauris molestie pharetra nibh. Aliquam ornare, libero at",
    department:
      "amet lorem semper auctor. Mauris vel turpis. Aliquam adipiscing lobortis",
    hire_date: "Nov 23, 2020",
  },
  {
    name: "Shaeleigh Meyer",
    phone: "1-932-356-6563",
    email: "ridiculus.mus@protonmail.org",
    address: "297-513 Consequat Av.",
    position_name:
      "lectus pede et risus. Quisque libero lacus, varius et, euismod",
    department: "diam eu dolor egestas rhoncus. Proin nisl sem, consequat nec,",
    hire_date: "Sep 7, 2020",
  },
  {
    name: "Aileen Holmes",
    phone: "(404) 481-8236",
    email: "mauris.non.dui@aol.edu",
    address: "P.O. Box 779, 1201 Proin Rd.",
    position_name:
      "Duis cursus, diam at pretium aliquet, metus urna convallis erat,",
    department: "augue ac ipsum. Phasellus vitae mauris sit amet lorem semper",
    hire_date: "Oct 25, 2020",
  },
  {
    name: "Stephen Hernandez",
    phone: "1-153-325-4615",
    email: "lacus.cras.interdum@outlook.ca",
    address: "9659 Primis Avenue",
    position_name:
      "Maecenas malesuada fringilla est. Mauris eu turpis. Nulla aliquet. Proin",
    department:
      "ridiculus mus. Proin vel nisl. Quisque fringilla euismod enim. Etiam",
    hire_date: "Nov 22, 2020",
  },
];
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<null | userDataType>(null);
  const [users, setUsers] = useState<userDataType[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const openModal = (user: userDataType) => {
    setUser(user);
    setIsOpen(true);
  };
  let content = users ? (
    users.map((el) => <User userInfo={el} openModal={openModal} />)
  ) : isLoading ? (
    <p className={styles.load}>Loading...</p>
  ) : (
    <p>Not found</p>
  );

  const fetchingData = (url: string) => {
    setIsLoading(true);
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        if (users.length > 0) setUsers(users);
        else setUsers(null);
      })
      .catch((error) => {
        if (error instanceof Error) alert(error.message);
        else alert("error");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  useEffect(() => {
    fetchingData(URL);
  }, []);

  const fetchUsers = (userInput: string) => {
    if (userInput.length > 0) {
      fetchingData(`${URL}?term=${userInput}`);
    } else {
      fetchingData(URL);
    }
  };

  return (
    <div className={styles.App}>
      <SearchBar fetchUsers={fetchUsers} />
      <div className={styles.users}>{content}</div>
      {isOpen && user && (
        <>
          <div className={styles.modal} onClick={() => setIsOpen(false)}></div>
          <UserInfo
            userInfo={user}
            setIsOpen={() => {
              setIsOpen(false);
            }}
          />
        </>
      )}
    </div>
  );
}

export default App;
