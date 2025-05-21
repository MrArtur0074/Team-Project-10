import "./MultiAuth.css";

export function FormWrapper({ title, children }) {
  return (
    <>
      <h2 style={{ textAlign: "center" }}>{title}</h2>
      <div className="wrapperMain_block">{children}</div>
        
    </>
  );
}
