import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useRef, useState, KeyboardEvent } from "react";

export default function Table() {
  const [search, setSearch] = useSearchParams();
  const [studenId, setStudentId] = useState("");
  const formData = useRef<HTMLFormElement>(null);
  useEffect(() => {
    let id = search.get("studentid") ?? "";
    if (id.length > 0) {
      setStudentId(id);
    }
  }, []);

  useEffect(() => {
    let submiting = search.get("submit") ?? "";
    if (studenId.length > 0 && submiting === "auto") {
      formData.current?.submit();
    }
  }, [studenId]);

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
    <main className="text-center flex justify-center my-3 px-10">
      <div className="block rounded-lg bg-white p-6 shadow-lg border dark:bg-neutral-700">
        <h3 className="text-2xl my-3">ตารางเรียนรายบุคคล</h3>
        <form
          ref={formData}
          method="POST"
          acceptCharset="windows-874"
          action="https://reg.ubu.ac.th/registrar/learn_time.asp"
        >
          <input type="hidden" name="backto" value={"home"} />
          <input
            className="input-text"
            type="text"
            name="studentid"
            value={studenId}
            onChange={(e) => {
              setStudentId(e.target.value);
              setSearch({ studentid: e.target.value });
            }}
            onKeyDown={getKeyDown}
            placeholder="รหัสนักศึกษา (ตัวเลข)"
          />
          <div>
            <input type="hidden" name="f_cmd" value={"2"} />
          </div>
          <input type="hidden" name="studentname" />
          <button className="py-2 px-3 shadow-md shadow-zinc-200 hover:bg-zinc-100 rounded">
            submit
          </button>
        </form>
        <div className="mb-3 mt-5">
          <button
            className="py-2 px-3 shadow-md shadow-zinc-200 hover:bg-zinc-100 rounded"
            onClick={(e) => {
              let url = location.href;
              navigator.clipboard.writeText(url + "&submit=auto");
              e.currentTarget.innerText = "copied";
            }}
          >
            copy link
          </button>
        </div>
        <div className="my-10 text-right">
          <Link className="underline hover:text-blue-600" to={"/"}>
            ค้นหานักศึกษา
          </Link>
        </div>
      </div>
      <div></div>
    </main>
  );
}
