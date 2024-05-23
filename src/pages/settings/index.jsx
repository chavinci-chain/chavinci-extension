import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import cha from "../../assets/images/cha.png"
import { IoIosSettings, IoMdClose } from "react-icons/io";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { FaBook, FaLock } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";

const Item = ({ item }) => {
    return (
        <button onClick={item.onClick} className="flex w-full justify-between text-lg px-4 py-5 relative   items-center  text-white">
            <div className="w-full flex items-center ">
                <div className="flex justify-center mr-4 ">
                    <item.icon size={24} />
                </div>
                <div className="text-lg font-medium   ">
                    {item.title}
                </div>
            </div>
            <div className="h-4 w-4">
                <MdKeyboardArrowRight size={20} />
            </div>
        </button>
    )
}
export default function Settings() {
    const navigate = useNavigate()
    const [tab, setTab] = useState("settings")
    const [label, setLabel] = useState("")
    const [address, setAddress] = useState("")
    const settings_items = [
        {
            title: "General",
            key: "general",
            icon: IoIosSettings,
            onClick: () => setTab("general")
        },
        {
            title: "Security & privacy",
            key: "security",
            icon: FaLock,
            onClick: () => setTab("security")
        },
        {
            title: "Address Book",
            key: "addressbook",
            icon: FaBook,
            onClick: () => setTab("addressbook")
        },
        {
            title: "About",
            key: "about",
            icon: FaInfoCircle,
            onClick: () => setTab("about")
        },
    ]


    const handleSave = () => {
        console.log({ label, address })
    }
    let content;

    switch (tab) {
        case "general":
            content = (
                <div className="flex flex-col items-start w-full">
                    {settings_items.map((item, index) => (
                        <Item item={item} key={index} />
                    ))}
                </div>
            )
            break;
        case "security":
            content = (
                <div className="flex flex-col items-start w-full">
                    {settings_items.map((item, index) => (
                        <Item item={item} key={index} />
                    ))}
                </div>
            )
            break;
        case "addressbook":
            content = (
                <div className="flex flex-col items-center justify-center h-full w-full gap-2 text-white">
                    <FaBook size={24} className="text-zinc-300 mb-2" />
                    <h3 className="text-lg text-bold ">
                        Build your contact list
                    </h3>
                    <p className="text-xs font-medium  ">
                        Add friends and addresses you trust
                    </p>
                    <button onClick={() => setTab("add-addressbook")} className="text-blue-600 text-sm">
                        +Add address book
                    </button>
                </div>
            )
            break;
        case "about":
            content = (
                <div className="pt-2 pb-5  px-4">
                    <div className="h-auto min-w-0 flex flex-col   ">
                        <div className="py-2">
                            <div className="text-white text-base font-semibold ">Chavinci Wallet Version</div>
                            <div className="text-sm pt-1 font-normal text-zinc-500   ">1.0.0</div>
                        </div>
                        <div className="py-2">
                            <div className="mt-4 text-zinc-500 text-sm mb-2">Chavinci Wallet is designed and built around the world.</div>
                        </div>
                    </div>
                    <div className="h-auto min-w-0 flex flex-col   gap-2">
                        <div className="pb-1  text-base  text-white">Links</div>
                        <div ><a className="w-max p-0 font-normal text-lg text-blue-600 bg-transparent " href="https://chavinci.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy policy</a></div>
                        <div ><a className="w-max p-0 font-normal text-lg text-blue-600 bg-transparent " href="https://chavinci.com/legal/terms-of-service" target="_blank" rel="noopener noreferrer">Terms of use</a></div>
                        <hr className="bg-zinc-600 " />
                        <div ><a className="w-max p-0 font-normal text-lg text-blue-600 bg-transparent " href="https://docs.cha.network/" target="_blank" rel="noopener noreferrer" role="button" tabIndex={0}>Visit our docs center</a></div>
                        <div ><a className="w-max p-0 font-normal text-lg text-blue-600 bg-transparent " href="https://chavinci.com/" target="_blank" rel="noopener noreferrer">Visit our website</a></div>
                        <div ><a className="w-max p-0 font-normal text-lg text-blue-600 bg-transparent " href="https://chavinci.com/contact" target="_blank" rel="noopener noreferrer" role="button" tabIndex={0}>Contact us</a></div>
                    </div>
                </div>
            )
            break;
        case "add-addressbook":
            content = (
                <div className="flex flex-col items-start justify-between max-h-screen   w-full gap-4 text-white ">
                    <div className="  flex-col flex w-full px-4">
                        <label htmlFor="label" className="text-sm font-medium    ">
                            Label
                        </label>
                        <input id="label" onChange={(e) => setLabel(e.target.value)} value={label} type="text" placeholder="Label" className={`${false ? "border-rose-600" : "border-zinc-500"} w-full bg-transparent  border-[1px] py-4 px-2 rounded-lg`} />

                    </div>
                    <div className="  flex-col flex w-full px-4 ">
                        <label htmlFor="address" className="text-sm font-medium    ">
                            Address
                        </label>
                        <input id="address" onChange={(e) => setAddress(e.target.value)} value={address} type="text" placeholder="Enter address" className={`${false ? "border-rose-600" : "border-zinc-500"} w-full bg-transparent  border-[1px] py-4 px-2 rounded-lg`} />
                    </div>
                    <div className="flex  gap-3 w-full px-4 justify-end mt-12">
                        <button onClick={() => setTab("addressbook")} className=" border-[1px] border-green-500 hover:bg-green-500 hover:text-white w-full py-2 text-sm font-semibold  rounded-full transition-all   delay-[50ms]">
                            Cancel
                        </button>
                        <button onClick={handleSave} disable={!address && !label} className="  bg-green-500 text-white w-full py-2 text-sm font-semibold  rounded-full hover:bg-green-500/70 transition-all delay-75">
                            Save
                        </button>
                    </div>
                </div>
            )
            break;

        case "settings":
            content = (
                <div className="flex flex-col items-start w-full h-auto">
                    {settings_items.map((item, index) => (
                        <Item item={item} key={index} />
                    ))}
                </div>
            )
            break;
        default:
            break;
    }
    return (
        <div className="flex w-full">
            <div className="w-full overflow-y-auto relative z-[18] flex flex-nowrap">
                <div className="">
                    <div className="gap-4 flex flex-row items-center justify-between w-full min-w-full overflow-hidden  ">
                        {tab != "settings" ?
                            <button onClick={() => setTab("settings")} className="flex items-center justify-start   rounded-full hover:bg-green-700/70  text-white p-1">
                                <MdKeyboardArrowLeft size={20} />
                            </button>
                            :
                            <button onClick={() => navigate("/")} className="flex items-center justify-start   rounded-full hover:bg-green-700/70  text-green-400 p-1">
                                <img src={cha} alt="Chavinci Network" className="h-6 w-6" />
                            </button>
                        }
                        <div className="text-ellipsis max-w-[250px] whitespace-nowrap overflow-hidden text-center   ">
                            <span className="font-bold text-lg capitalize  ">
                                {tab}
                            </span>
                        </div>
                        <button onClick={() => navigate("/")} className="flex items-center justify-end  rounded-full hover:bg-green-700/70  p-1">
                            <IoMdClose size={20} />
                        </button>
                    </div>
                </div>
                <div className="flex flex-row flex-nowrap overflow-auto">
                    {content}
                </div>
            </div>
        </div >
    )
}

