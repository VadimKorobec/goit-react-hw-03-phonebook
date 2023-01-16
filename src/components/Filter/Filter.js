export const Filter = ({ filter, onChange }) => {
  return (
    <label>
      <input
        type="text"
        name={filter}
        onChange={onChange}
        placeholder="Find contacts by name"
      />
    </label>
  );
};
