import React, { useState } from "react";
import { Modal } from "../Modal/Modal";
import { FormEdit } from "../FormEdit/FormEdit";

interface ContactItemProps {
  id: string;
  username: string;
  birthday_date: string;
  email: string;
  phone_number: string;
  address: string;
}

export const ContactItem: React.FC<ContactItemProps> = ({
  id,
  username,
  birthday_date,
  email,
  phone_number,
  address,
}) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const toggleModal = (): void => {
    setShowModal(!showModal);
  };

  return (
    <tr>
      <td>{username}</td>
      <td>{birthday_date}</td>
      <td>{email}</td>
      <td>{phone_number}</td>
      <td>{address}</td>
      <td>
        <button onClick={toggleModal}>Update</button>
      </td>
      {showModal && (
        <Modal onClose={toggleModal}>
          <FormEdit
            id={id}
            username={username}
            birthday_date={birthday_date}
            email={email}
            phone_number={phone_number}
            address={address}
          />
        </Modal>
      )}
    </tr>
  );
};
