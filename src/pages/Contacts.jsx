import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Helmet } from "react-helmet";

import { fetchContacts } from "../redux/contacts/operations";
import Background from "../images/matrix.jpg";
import { ContactList } from "../components/ContactList/ContactList";
import { MyPagination } from "../components/MyPagination/MyPagination";
import { MatrixText } from "../components/MatrixText/MatrixText";

const styles = {
  container: {
    height: `100vh`,
    padding: `60px`,
    backgroundImage: ` url(${Background})`,
    backgroundSize: `500px`,
  },
};

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
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
}
