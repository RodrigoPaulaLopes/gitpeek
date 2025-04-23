import { Search } from "lucide-react"


interface IProps {
    change: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string
    loading: boolean
}
const InputSearch = ({change, value, loading}: IProps) => {
    return (
        <div className="flex w-full h-[62px]  rounded-lg bg-black rounded-lg border border-gray-300 bg-white ">
            <input
                type="text"
                className="h-search rounded-lg w-full flex-1 bg-white border-none px-4 text-base placeholder:text-black text-black outline-none"
                placeholder="Digite um usuário do Github"
                value={value}
                onChange={e => change(e)}
            />
            <button className="flex justify-center items-center bg-button w-[62px] text-white px-4 py-2 rounded h-full">
                {loading ? <span className="loading loading-spinner loading-xs"></span> : <Search size={24} color="white" />}
                
            </button>
        </div>
    )
}

export default InputSearch