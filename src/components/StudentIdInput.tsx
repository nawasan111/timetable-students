import { useState, ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";

export default function StudentIdInput() {
  const [search, setSearch] = useSearchParams();
  const [idValue, setIdValue] = useState(search.get("id") ?? "");
  const [textBtn, setTextBtn] = useState("copy")

  const getChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const re = /^[0-9\b*]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setIdValue(e.target.value);
      setSearch({ id: e.target.value });
    }
  };

  const onCopy = () => {
    if (idValue.length < 11) {
      alert("id ไม่ถูกต้อง")
      return;
    }
    navigator.clipboard.writeText(`${window.location}&submit=auto`)
    setTextBtn("copied")
  }

  return (
    <div>
      <input
        className="input-text"
        type="text"
        name="f_studentcode"
        placeholder="รหัสประจำตัว (ตัวเลข)"
        value={idValue}
        onChange={getChangeInput}
      />
      <span onClick={onCopy} className="btn-orange">{textBtn}</span>
    </div>
  );
}
