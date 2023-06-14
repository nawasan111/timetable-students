export default function StudenStatus() {
  return (
    <div>
      <label htmlFor="">สถานภาพ</label>
      <select className="input-select" name="f_studentstatus" id="">
        <option value="all">ทั้งหมด</option>
        <option value="normal">ปกติ</option>
        <option value="graduate">จบการศึกษา</option>
        <option value="outofstatus">พ้นสภาพ</option>
      </select>
    </div>
  );
}
