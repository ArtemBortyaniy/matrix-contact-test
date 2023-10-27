import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { fetchContacts } from "../redux/contacts/operations";
import Background from "../images/matrix.jpg";
import { ContactList } from "../components/ContactList/ContactList";
import { MyPagination } from "../components/MyPagination/MyPagination";
import { MatrixText } from "../components/MatrixText/MatrixText";

const styles = {
  container: {
    height: `100vh`,
    padding: `60px`,
    backgroundImage: `url(${Background})`,
    backgroundSize: `500px`,
  },
};

const Contacts: React.FC = () => {
  const dispatch = useDispatch<ThunkDispatch<{}, {}, AnyAction>>();

  useEffect(() => {
    dispatch(fetchContacts(0));
  }, [dispatch]);

  return (
    <div style={styles.container}>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <ContactList />
      <MyPagination />
      <MatrixText />
    </div>
  );
};

export default Contacts;
