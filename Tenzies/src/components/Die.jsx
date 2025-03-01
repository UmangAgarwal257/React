// eslint-disable-next-line react/prop-types
export default function Die({ value, isHeld }) {
  return (
    <>
      <button style={{ backgroundColor: isHeld ? "lightgreen" : undefined }}>
        {value}
      </button>
    </>
  );
}
