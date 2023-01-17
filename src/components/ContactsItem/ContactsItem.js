export const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <li key={id}>
      <p>
        {name}:{number}
      </p>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};
