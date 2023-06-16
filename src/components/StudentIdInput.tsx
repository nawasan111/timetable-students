import { useState, ChangeEvent, KeyboardEvent } from "react";
import { useSearchParams } from "react-router-dom";

export default function StudentIdInput() {
  const [search, setSearch] = useSearchParams();
  const [idValue, setIdValue] = useState(search.get("id") ?? "");

  const getChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    let re = /^[0-9\b*]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setIdValue(e.target.value);
      setSearch({ id: e.target.value });
    }
  };

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
    </div>
  );
}
