export const ContactItem = ({ contact: { name, number } }) => {
  return (
    <div>
      <p>
        {name}:{number}
      </p>
      <button type="button">Delete</button>
    </div>
  );
};
