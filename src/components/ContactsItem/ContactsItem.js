export const ContactItem = ({ contact: { id, name, number }, onDelete }) => {
  return (
    <div>
      <p>
        {name}:{number}
      </p>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};
