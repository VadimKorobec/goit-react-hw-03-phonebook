import { ContactItem } from 'components/ContactsItem/ContactsItem';

export const ContactsList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactItem id={id} name={name} number={number} onDelete={onDelete} />
      ))}
    </ul>
  );
};
