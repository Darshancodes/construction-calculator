export const Cement = () => {
  const brands = ["UltraTech or Ambhuja", "JK", "Wonder or shree"];
  return (
    <div>
      {brands?.map((brand) => (
        <h2>{brand}</h2>
      ))}
    </div>
  );
};
