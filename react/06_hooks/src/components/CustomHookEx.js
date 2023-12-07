import useToggle from "../hooks/useToggle";

export default function CustomHookEx() {
  const [isPopup, togglePopup] = useToggle(false);

  return (
    <>
      <h4>customHook Example</h4>
      {isPopup && <div>보여욥</div>}
      <button onClick={togglePopup}>토그으으을</button>
    </>
  );
}
