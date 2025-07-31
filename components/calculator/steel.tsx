export const Steel = () => {
  const steelBrands = ["tata tiscon", "jindal Panther", "ambhuja", "ultratech"];
  return (
    <div>
      <h2>Select Brand</h2>
      {steelBrands?.map((steel) => (
        <h3>{steel}</h3>
      ))}
    </div>
  );
};
