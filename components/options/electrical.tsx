export const Electrical = () => {
  const brands = ["shiva/jindal", "other brands"];
  return (
    <div>
      <div>
        Electrical slab & wall material -
        {brands?.map((brand) => (
          <h2>{brand}</h2>
        ))}
      </div>
      <div>
        Wires & cables (EWC0100)-{" "}
        {brands?.map((brand) => (
          <h2>{brand}</h2>
        ))}
      </div>
      <div>sheet & switches - anchor penta,havells,Schneider/GM</div>
    </div>
  );
};
