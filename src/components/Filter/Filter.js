export const Filter = ({ filter, onChange }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" name="filter" filter={filter} onChange={onChange} />
    </label>
  );
};
