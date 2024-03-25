import StudentIdInput from "../components/StudentIdInput";
import FormInput from "../components/FormInput";
import NameInput from "../components/NameInput";
import LastNameInput from "../components/LastNameInput";
import StudenStatus from "../components/StudenStatus";
import Faculty from "../components/Faculty";
import LImitCount from "../components/LImitCount";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  useEffect(() => {
    document.title = "ตารางเรียนนักศึกษา";
  }, []);
  return (
    <main className="text-center min-h-screen flex justify-center py-3 sm:px-10 bg-orange-50">
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
          <button
            className="btn-orange"
            type="submit"
          >
            search
          </button>
        </div>
        <div className="mt-5 text-right">
          <Link className="underline hover:text-blue-600" to={'/table'}>ตารางเรียนรายบุคคล</Link>
        </div>
      </FormInput>
    </main>
  );
}
