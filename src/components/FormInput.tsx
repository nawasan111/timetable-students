import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

type FormProps = {
  children: string | JSX.Element | JSX.Element[];
};

export default function FormInput({ children }: FormProps) {
  const [searchParams] = useSearchParams();
  const formRef = useRef<HTMLFormElement>(null);
  useEffect(() => {
    let getSubmit = searchParams.get("submit");
    if (getSubmit === "auto") {
      if (formRef.current) {
        formRef.current.target = "";
        formRef.current.submit();
      }
    }
  }, []);
  return (
    <div className="block rounded-lg bg-white p-6 shadow-lg border dark:bg-neutral-700">
      <form
        acceptCharset="windows-874"
        id="formRef"
        ref={formRef}
        action="https://reg2.ubu.ac.th/registrar/learn_time.asp?backto=home"
        target="_blank"
        method="POST"
      >
        {children}
      </form>
    </div>
  );
}
