export default function Faculty() {
  return (
    <div>
      <label htmlFor="faculty">คณะ</label>
      <select className="input-select max-w-[80vw]" name="f_facultyid" id="">
        <option value="all">ทั้งหมด</option>
        <option value="0">- ไม่กำหนด -</option>
        <option value="11">คณะวิทยาศาสตร์</option>
        <option value="12">คณะเกษตรศาสตร์</option>
        <option value="13">คณะวิศวกรรมศาสตร์</option>
        <option value="14">คณะศิลปศาสตร์</option>
        <option value="15">คณะเภสัชศาสตร์</option>
        <option value="17">คณะบริหารศาสตร์</option>
        <option value="19">วิทยาลัยแพทยศาสตร์และการสาธารณสุข</option>
        <option value="20">คณะศิลปประยุกต์และสถาปัตยกรรมศาสตร์</option>
        <option value="21">คณะนิติศาสตร์</option>
        <option value="22">พัฒนบูรณาการศาสตร์</option>
        <option value="23">คณะรัฐศาสตร์</option>
        <option value="24">หน่วยจัดการเรียนการสอนจังหวัดมุกดาหาร</option>
        <option value="25">คณะพยาบาลศาสตร์</option>
        <option value="91">กลุ่มบุคคลภายนอก</option>
        <option value="92">โครงการเรียนล่วงหน้า</option>
      </select>
    </div>
  );
}
