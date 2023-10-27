import React from "react";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contacts/selectors";
import { ContactItem } from "../ContactItem/ContactItem";

export const ContactList: React.FC = () => {
  type Contact = {
    id: string;
    name: string;
    birthday_date: string;
    email: string;
    phone_number: string;
    address: string;
  };

  const contacts: Contact[] = useSelector(selectContacts);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Birthday Date</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Address</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {contacts &&
          contacts.map((contact: Contact) => (
            <ContactItem
              key={contact.id}
              id={contact.id}
              username={contact.name}
              birthday_date={contact.birthday_date}
              email={contact.email}
              phone_number={contact.phone_number}
              address={contact.address}
            />
          ))}
      </tbody>
    </table>
  );
};
