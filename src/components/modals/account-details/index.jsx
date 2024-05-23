import React, { useState } from "react"
import { QRCodeSVG } from "qrcode.react"
import Jazzicon from "react-jazzicon/dist/Jazzicon"
import useCopyToClipboard from "../../../hooks/use-copy-to-clipboard"
import { BiSolidCopy, BiSolidCopyAlt } from "react-icons/bi"
import { destroyModal } from "../../../store/modal/actions"
import { IoMdClose } from "react-icons/io"
import { FaCheck, FaPencil } from "react-icons/fa6";
import { MdKeyboardArrowLeft } from "react-icons/md"

export default function AccountDetails() {
    const { copied, copyToClipboard } = useCopyToClipboard()
    const [tab, setTab] = useState("general-tab");
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    const [isEdit, setIsEdit] = useState(false);
    const [accountName, setAccountName] = useState("Account 1");
    const handleUpdate = () => {
        setIsEdit(false);
    }
    const handleCopy = (data) => {
        copyToClipboard(data)
    }

    const handleClose = () => {
        destroyModal()
    }
    const handlePassword = () => {
        if ("12345" == password) {
            setTab("show-privkey-tab")
        } else {
            setError("Incorrect Password.")
        }

    }

    let content;

    switch (tab) {
        case "general-tab":
            content = (
                <>
                    <div className="pr-3 pt-4 pb-6 flex justify-between w-full">
                        <div className="ml-6 w-[calc(100%-48px)] text-center" >
                            {/* <Jazzicon diameter={40} seed={parseInt(depositAddress.address)} /> */}
                            <Jazzicon diameter={40} seed={"parseInt(depositAddress.address)"} />
                        </div>
                        <div className="flex justify-end min-w-6">
                            <button onClick={handleClose} className="flex items-center justify-center">
                                <IoMdClose size={24} />
                            </button>
                        </div>
                    </div>
                    <div>
                        {
                            isEdit ?

                                <div className="flex items-center gap-3">
                                    <input type="text" className="h-10 border-[1px] rounded-full bg-transparent  px-3"
                                        onChange={(e) => setAccountName(e.target.value)}
                                        value={accountName}
                                    />

                                    <button className="hover:bg-zinc-700/70 p-2 rounded-full" onClick={handleUpdate}>
                                        <FaCheck size={16} />
                                    </button>
                                </div>
                                : <div className="flex items-center gap-3">
                                    <span className="text-lg">{accountName}</span>
                                    <button className="hover:bg-zinc-700/70 p-2 rounded-full" onClick={() => setIsEdit(true)}>
                                        <FaPencil size={16} />
                                    </button>
                                </div>
                        }

                    </div>
                    <div>
                        <QRCodeSVG
                            value={"cha:c7669qi6uJio8xF9qfhoWNTroghgXkm5yA"}
                            size={180}
                            color='white'
                            // getRef={(ref) => setQRImage(ref)}
                            backgroundColor='black'
                        />
                    </div>
                    <div className="bg-green-500/30 p-4 rounded-full flex ">
                        <span className="text-xs text-green-500">
                            c7669qi6uJio8xF9qfhoWNTroghgXkm5yA
                        </span>
                        <button onClick={() => handleCopy("c7669qi6uJio8xF9qfhoWNTroghgXkm5yA")} className="flex items-center gap-2 rounded-full hover:bg-green-700/70  text-green-400 px-2 py-1">

                            {
                                copied ?
                                    <BiSolidCopyAlt size={16} />
                                    :
                                    <BiSolidCopy size={16} />
                            }

                        </button>
                    </div>
                    <button onClick={() => setTab("password-tab")} className=" border-[1px] border-green-500 w-full py-2 text-sm font-semibold  rounded-full hover:text-green-white hover:bg-green-500">
                        Show Privkey
                    </button>
                </>
            )
            break;
        case "password-tab":
            content = (
                <>
                    <div className="w-full flex items-center justify-between ">
                        <div className="flex justify-start ">
                            <button onClick={() => setTab("general-tab")} className="flex items-center justify-center">
                                <MdKeyboardArrowLeft size={24} />
                            </button>
                        </div>
                        <div className="flex justify-center ">

                            <header className="text-center font-bold text-base text-white">
                                Show private key
                            </header>
                        </div>
                        <div className="flex justify-end min-w-6">
                            <button onClick={handleClose} className="flex items-center justify-center">
                                <IoMdClose size={24} />
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 items-center ">
                        <div>
                            <Jazzicon diameter={40} seed={"parseInt(depositAddress.address)"} />
                        </div>
                        <div>
                            <span>
                                {accountName}
                            </span>
                        </div>
                        <div className="bg-green-500/30 p-2 rounded-full flex items-center">
                            <span className="text-xs text-green-500">
                                c7669q...Xkm5yA
                            </span>
                            <button onClick={() => handleCopy("c7669qi6uJio8xF9qfhoWNTroghgXkm5yA")} className="flex items-center gap-2 rounded-full hover:bg-green-700/70  text-green-400 px-2 py-1">

                                {
                                    copied ?
                                        <BiSolidCopyAlt size={16} />
                                        :
                                        <BiSolidCopy size={16} />
                                }

                            </button>
                        </div>
                    </div>
                    <div className="mt-6 flex-col flex w-full ">
                        <label htmlFor="password" className="text-sm font-medium    ">
                            Enter your password
                        </label>
                        <input onChange={(e) => setPassword(e.target.value)} value={password} type="text" placeholder="Password" className={`${error ? "border-rose-600" : "border-zinc-500"} w-full bg-transparent  border-[1px] py-4 px-2 rounded-lg`} />
                        {error &&
                            <span className="text-rose-500 text-xs mt-1">
                                {error}
                            </span>}
                    </div>
                    <div id="alert-border-2" class="flex items-center p-4 mb-4 border-t-4 border-rose-600   bg-[#ff526326]  " role="alert">
                        <svg class="flex-shrink-0 w-4 h-4 text-[#ff5263]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        <div class="ms-3 text-sm font-medium text-white ">
                            Warning: Never disclose this key. Anyone with your private keys can steal any assets held in your account.
                        </div>

                    </div>
                    <div className="flex  gap-3 w-full">
                        <button className=" border-[1px] border-green-500 hover:bg-green-500 hover:text-white w-full py-2 text-sm font-semibold  rounded-full transition-all   delay-[50ms]">
                            Cancel
                        </button>
                        <button onClick={handlePassword} disable={!password} className="  bg-green-500 text-white w-full py-2 text-sm font-semibold  rounded-full hover:bg-green-500/70 transition-all delay-75">
                            Confirm
                        </button>
                    </div>
                </>
            )

            break;
        case "show-privkey-tab":
            content = (
                <>
                    <div className="w-full flex items-center justify-between ">
                        <div className="flex justify-start ">
                            <button onClick={() => setTab("general-tab")} className="flex items-center justify-center">
                                <MdKeyboardArrowLeft size={24} />
                            </button>
                        </div>
                        <div className="flex justify-center ">

                            <header className="text-center font-bold text-base text-white">
                                Show private key
                            </header>
                        </div>
                        <div className="flex justify-end min-w-6">
                            <button onClick={handleClose} className="flex items-center justify-center">
                                <IoMdClose size={24} />
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 items-center ">
                        <div>
                            <Jazzicon diameter={40} seed={"parseInt(depositAddress.address)"} />
                        </div>
                        <div>
                            <span>
                                {accountName}
                            </span>
                        </div>
                        <div className="bg-green-500/30 p-2 rounded-full flex items-center">
                            <span className="text-xs text-green-500">
                                c7669q...Xkm5yA
                            </span>
                            <button onClick={() => handleCopy("c7669qi6uJio8xF9qfhoWNTroghgXkm5yA")} className="flex items-center gap-2 rounded-full hover:bg-green-700/70  text-green-400 px-2 py-1">

                                {
                                    copied ?
                                        <BiSolidCopyAlt size={16} />
                                        :
                                        <BiSolidCopy size={16} />
                                }

                            </button>
                        </div>
                    </div>
                    <p className="text-xs font-normal mt-6">
                        Private key for {accountName}
                    </p>
                    <div className="border-[1px] border-zinc-300 flex rounded-md gap-4 p-4 items-center flex-row max-w-full">
                        <p className="text-xs font-normal   break-words break-keep" style={{ wordBreak: "break-word" }}>c31e0ffbc7f2c490dace5b77a27c4786b4a873e93f871c82e749b7081c35c5b4</p>
                        <button onClick={() => handleCopy("c31e0ffbc7f2c490dace5b77a27c4786b4a873e93f871c82e749b7081c35c5b4")} className="flex items-center gap-2 rounded-full hover:bg-zinc-700/70  text-zinc-400 px-2 py-1">

                            {
                                copied ?
                                    <BiSolidCopyAlt size={16} />
                                    :
                                    <BiSolidCopy size={16} />
                            }

                        </button>
                    </div>

                    <div id="alert-border-2" class="flex items-center p-4 mb-4 border-t-4 border-rose-600   bg-[#ff526326]  " role="alert">
                        <svg class="flex-shrink-0 w-4 h-4 text-[#ff5263]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        <div class="ms-3 text-xs font-medium text-white ">
                            Warning: Never disclose this key. Anyone with your private keys can steal any assets held in your account.
                        </div>

                    </div>

                    <button onClick={handleClose} className="  bg-green-500 text-white w-full py-2 text-sm font-semibold  rounded-full hover:bg-green-500/70 transition-all delay-75">
                        Done
                    </button>

                </>
            )
            break;

        default:
            break;
    }


    return (
        <div className="flex flex-col max-h-full h-full w-full pb-6 text-white p-4 gap-4 items-center ">
            {content}
        </div>
    )
}