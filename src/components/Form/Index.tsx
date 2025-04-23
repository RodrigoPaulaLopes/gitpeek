import { ReactNode } from "react";

interface IContainer {
    children: ReactNode, 
    submit:  (e: React.FormEvent<HTMLFormElement>) => void;

}
const Form = ({ children, submit }: IContainer) => {
    return <form className="w-full px-10 flex items-center justify-center lg:max-w-2xl" onSubmit={e => submit(e)}>

        {children}
    </form>;
};

export default Form;
