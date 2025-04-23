import { ReactNode } from "react";

interface IContainer {
    children: ReactNode
}
const Container = ({ children }: IContainer) => {
    return <div className="mx-auto max-w-7xl h-screen flex flex-col justify-center items-center">
        {children}
    </div>;
};

export default Container;
