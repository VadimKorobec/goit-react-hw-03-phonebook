export const Filter = () => {
  return (
    <label>
      Find contacts by name
      <input type="text" value={filter} onChange />
    </label>
  );
};
