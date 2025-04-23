import { ReactNode } from "react";

interface IContainer {
    children: ReactNode
}
const Content = ({ children }: IContainer) => {
    return <div className="flex justify-center items-center gap-2">
        {children}
    </div>;
};

export default Content;
