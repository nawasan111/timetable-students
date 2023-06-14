

type FormProps = {
  children: string | JSX.Element | JSX.Element[];
};

export default function FormInput({ children }: FormProps) {
  return (
    <form
      onSubmit={() => false}
      action="https://reg2.ubu.ac.th/registrar/learn_time.asp?backto=home"
      target="_blank"
      method="POST"
    >
      {children}
    </form>
  );
}
