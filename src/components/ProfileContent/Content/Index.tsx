import { ReactNode } from "react"

interface IProps {
    children: ReactNode
}

const Content = ({children}: IProps) => {
    return (
        <div className="flex flex-col justify-center items-center lg:flex-row items-center bg-alert mx-5 lg:mx-20 lg:px-20 py-5 rounded-lg mt-8 gap-8">
            {children}
        </div>
    )
}

export default Content