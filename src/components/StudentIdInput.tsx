import { useState, ChangeEvent, KeyboardEvent } from "react";
import { useSearchParams } from "react-router-dom";

export default function StudentIdInput() {
  const [search, setSearch] = useSearchParams();
  const [idValue, setIdValue] = useState(search.get("id") ?? "");

  const getChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    let re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setIdValue(e.target.value);
      setSearch({id: e.target.value})
    }
  };

  const getKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    let re = /^[0-9\b]+$/;
    console.log(e.key);
    let allowKey = [
      "*",
      "Delete",
      "Backspace",
      "ArrowLeft",
      "ArrowRight",
      "Tab",
      "Enter",
    ];
    if (!re.test(e.key) && !allowKey.includes(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <div>
      <label htmlFor="id">รหัสประจำตัว</label>
      <input
        className="input-text"
        type="text"
        name="f_studentcode"
        placeholder="รหัสประจำตัว (ตัวเลข)"
        value={idValue}
        onChange={getChangeInput}
        onKeyDown={getKeyDown}
      />
    </div>
  );
}
