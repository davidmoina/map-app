import reactLogo from "../assets/logo.svg";

export const ReactLogo = () => {
  return (
    <img
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "130px",
      }}
      src={reactLogo}
      alt="React logo"
    />
  );
};
