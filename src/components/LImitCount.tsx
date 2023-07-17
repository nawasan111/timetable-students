import { ChangeEvent, useState, KeyboardEvent } from "react";

export default function LImitCount() {
  const [limitCount, setLimitCount] = useState("");
  const [modeSelect, setModeSelect] = useState("25");

  const getChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    let re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setLimitCount(e.target.value);
    }
  };

  const getKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    let re = /^[0-9\b]+$/;
    console.log(e.key);
    let allowKey = [
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
    <div className="mt-3">
      <label htmlFor="">จำนวนรายการสูงสุด</label>
      <select
        className="input-select"
        name="f_maxrows"
        onChange={(e) => setModeSelect(e.target.value)}
      >
        <option value="25">25</option>
        <option value="100">100</option>
        <option value={limitCount}>custom</option>
      </select>
      <div>
        {modeSelect != "25" && modeSelect != "100" && (
          <input
            className="input-text"
            placeholder="จำนวนรายการ (ตัวเลข)"
            type="text"
            value={limitCount}
            onChange={getChangeInput}
            onKeyDown={getKeyDown}
          />
        )}
      </div>
    </div>
  );
}
