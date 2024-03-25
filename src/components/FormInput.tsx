import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

type FormProps = {
  children: string | JSX.Element | JSX.Element[];
};

export default function FormInput({ children }: FormProps) {
  const [searchParams] = useSearchParams();
  const formRef = useRef<HTMLFormElement>(null);
  useEffect(() => {
    const getSubmit = searchParams.get("submit");
    if (getSubmit === "auto") {
      if (formRef.current) {
        formRef.current.target = "";
        formRef.current.submit();
      }
    }
  }, []);
  return (
    <div className="block md:w-9/12 lg:w-8/12 max-w-3xl rounded-lg bg-white p-6 shadow sm:border dark:bg-neutral-700">
      <form
        onSubmit={(e) => {
          const full_name: string = e.currentTarget.full_name.value.split(" ");
          e.currentTarget["f_studentname"].value = full_name[0].trim() ?? "";
          e.currentTarget["f_studentsurname"].value = full_name[1].trim() ?? "";
        }}
        acceptCharset="windows-874"
        id="formRef"
        ref={formRef}
        action="https://reg2.ubu.ac.th/registrar/learn_time.asp?backto=home"
        target="_blank"
        method="POST"
      >
        {children}
      </form>
    </div >
  );
}
