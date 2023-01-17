import { ContactItem } from 'components/ContactsItem/ContactsItem';

export const ContactsList = ({ items }) => {
  return (
    <ul>
      {items.map((item, idx) => (
        <li key={idx}>
          <ContactItem contact={item} />
        </li>
      ))}
    </ul>
  );
};
