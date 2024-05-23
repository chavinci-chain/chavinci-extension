import React from "react";
import { IoMdClose } from "react-icons/io";
import { FaRegTrashAlt } from "react-icons/fa";
import { destroyModal } from "../../../store/modal/actions";

export default function ChangeNetwork() {
    const handleClose = () => {
        destroyModal()
    }
    return (
        <div className="flex flex-col max-h-full h-full pb-6">
            <div className="pr-3 pt-4 pb-6 flex justify-between">
                <div className="ml-6 w-[calc(100%-48px)]" >
                    <header className="text-center font-bold text-base text-white">
                        Select a network
                    </header>
                </div>
                <div className="flex justify-end min-w-6">
                    <button onClick={handleClose} className="flex items-center justify-center">
                        <IoMdClose size={24} />
                    </button>
                </div>
            </div>
            <div className="max-h-full overflow-auto flex flex-col ">
                <div className=" relative cursor-pointer w-full justify-between items-center flex gap-2 p-4 bg-green-500/30 ">
                    <div className="left-1 w-1 h-[calc(100%-8px)] absolute top-1 bg-green-500 rounded-full " />
                    <div className="flex items-center  justify-center rounded-full w-8 h-8 overflow-hidden max-w-8 flex-[0_0_32px] uppercase ">
                        <img src="./cha.png" className="w-full" alt="Chavinci Network" />
                    </div>
                    <div className="w-full flex-1 overflow-hidden text-start flex items-center">
                        <span className="text-ellipsis whitespace-nowrap overflow-hidden font-normal text-sm    ">
                            Chavinci Testnet
                        </span>
                    </div>
                </div>
                <div className=" relative cursor-pointer w-full justify-between items-center flex gap-2 p-4 hover:bg-zinc-700 group">
                    {false &&
                        <div className="left-1 w-1 h-[calc(100%-8px)] absolute top-1 bg-green-500 rounded-full " />
                    }
                    <div className="flex items-center  justify-center rounded-full w-8 h-8 overflow-hidden max-w-8 flex-[0_0_32px] uppercase ">
                        <img src="./cha.png" className="w-full" alt="Chavinci Network" />
                    </div>
                    <div className="w-full flex-1 overflow-hidden text-start flex items-center">
                        <span className="text-ellipsis whitespace-nowrap overflow-hidden font-normal text-sm    ">
                            Chavinci Mainnet (Soon)
                        </span>
                    </div>
                    {false &&
                        <button className="h-6 w-6  items-center justify-center rounded-full hover:bg-zinc-600 group-hover:inline-flex hidden" >
                            <FaRegTrashAlt size={14} color="tomato" />
                        </button>
                    }
                </div>
            </div>

        </div>
    )
}