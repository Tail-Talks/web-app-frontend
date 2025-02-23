import "./CancelButton.css";

export default function CancelButton() {
  return (
    <>
      <button type="reset" className="cancelButton">
        <p className="cancelButton-text">Удалить аккаунт</p>
      </button>
    </>
  );
}