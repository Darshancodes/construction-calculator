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

export const bricks = () => {
  const brands = [
    "fly ash bricks",
    "renwal or other red clay brick",
    "kanota or hanumargarah",
  ];
  return (
    <div>
      {brands?.map((brand) => (
        <h2>{brand}</h2>
      ))}
      <div>water proofing - yes or no</div>
      <div>termite solution - yes or no</div>
    </div>
  );
};

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
