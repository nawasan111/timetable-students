import StudentIdInput from "../components/StudentIdInput";
import FormInput from "../components/FormInput";
import NameInput from "../components/NameInput";
import LastNameInput from "../components/LastNameInput";
import StudenStatus from "../components/StudenStatus";
import Faculty from "../components/Faculty";
import LImitCount from "../components/LImitCount";

export default function Home() {
  return (
    <main className="text-center">
      <FormInput>
        <input type="hidden" name="f_cmd" value="1" />
        <h1 className="text-center text-2xl p-3">ตารางเรียนนักศึกษา</h1>
        <StudentIdInput />
        <NameInput />
        <LastNameInput />
        <StudenStatus />
        <Faculty />
        <LImitCount />
        <div>
          <button className="py-2 px-3 shadow shadow-blue-200 border border-blue-500 rounded" type="submit">search</button>
        </div>
      </FormInput>
    </main>
  );
}
