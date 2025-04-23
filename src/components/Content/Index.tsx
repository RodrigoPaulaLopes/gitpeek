import { ReactNode } from "react";

interface IContainer {
    children: ReactNode
}
const Content = ({ children }: IContainer) => {
    return <div className="flex flex-col lg:flex-row justify-center mb-4 items-center gap-2">
        {children}
    </div>;
};

export default Content;
