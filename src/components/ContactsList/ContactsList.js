import { ContactItem } from 'components/ContactsItem/ContactsItem';

export const ContactsList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map((contact, idx) => (
        <li key={idx}>
          <ContactItem contact={contact} />
        </li>
      ))}
    </ul>
  );
};
