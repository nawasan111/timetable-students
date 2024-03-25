export default function NameInput() {
  return (
    <div>
      <input className="input-text" type="text" name="full_name" placeholder="ชื่อจริง - นามสกุล" />
      <input type="hidden" name="f_studentname" placeholder="ชื่อจริง" />
    </div>
  );
}
