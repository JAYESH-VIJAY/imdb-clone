//-----------------this is the box ui component------------------

export default function Box({ children, backgroundColor, width, padding }) {
  return (
    <div className="box" style={{ backgroundColor, width, padding }}>
      {children}
    </div>
  );
}
