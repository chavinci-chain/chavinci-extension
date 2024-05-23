import { Button } from '@headlessui/react'
import React, { useState, useEffect } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiSolidCopy, BiSolidCopyAlt } from "react-icons/bi";
import { TbWorld } from "react-icons/tb";
import useCopyToClipboard from "../../hooks/use-copy-to-clipboard";
import { createModal } from "../../store/modal/actions";
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { RiAppsFill } from "react-icons/ri";
import { PiPlugsConnected } from "react-icons/pi";
import { IoMdSettings } from "react-icons/io";
import { TbHelpHexagonFilled } from "react-icons/tb";
import { MdLock } from "react-icons/md";
import cha from "../../assets/images/cha.png"
import { useNavigate } from "react-router-dom";
export default function Header() {
    const navigate = useNavigate();
    const { copied, copyToClipboard } = useCopyToClipboard()

    let address = "c7669qi6uJio8xF9qfhoWNTroghgXkm5yA"
    let account_name = "Account 1"
    let [network, setNetwork] = useState("Testnet")
    const [isConnect, setIsConnect] = useState(false)

    const handleChangeNetwork = (data) => {
        setNetwork(data);

    }
    const handleCopy = (data) => {
        copyToClipboard(data)

    }
    const dropmenulist = [
        {
            title: "Deposit",
            handleClick: () => createModal("account_details"),
            icon: RiAppsFill
        },
        {
            title: "View in Explorer",
            handleClick: () => window.open("https://explorer.cha.network"),
            icon: PiPlugsConnected
        },
        {
            title: "Support",
            handleClick: () => window.open("https://github.com/chavinci-chain/chavinci-extension/issues"),
            icon: TbHelpHexagonFilled
        },
        {
            title: "Settings",
            handleClick: () => navigate("/settings"),
            icon: IoMdSettings
        },
        {
            title: "Lock Chavinci",
            handleClick: () => console.log("lock-and-go-lock-page"),
            icon: MdLock
        },
    ]

    const [icon, setIcon] = useState(null)

    useEffect(() => {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            const activeTab = tabs[0];
            const faviconUrl = activeTab.favIconUrl;
            setIcon(faviconUrl)
        });
    }, [])

    return (
        <div className="flex flex-col  items-center justify-center shadow-2xl   w-full min-h-16  ">
            <div className="px-4 h-full w-full grid grid-cols-4 gap-2 p-2  items-center ">
                <div className="h-full flex items-center   ">
                    <Button
                        onClick={() => createModal("network_change_modal")}
                        className="rounded-full h-8 gap-2 bg-zinc-700 pl-3 pr-4 flex items-center w-auto text-sm font-medium text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white"
                    >
                        <div >
                            <img src={cha} alt="Chavinci Network" className="w-4 h-4" />
                        </div>
                        <IoIosArrowDown />
                    </Button>
                </div>
                <div className="h-full w-full flex col-span-2 flex-col items-center text-white  text-center ">
                    <button onClick={() => createModal("account_change_modal")} className="flex w-full items-center justify-center gap-2 text-sm rounded-full hover:bg-zinc-700/70 px-4 py-2">
                        <span>
                            {account_name}
                        </span>
                        <IoIosArrowDown />
                    </button>
                    <button onClick={() => handleCopy(address)} className="flex items-center gap-2 rounded-full hover:bg-zinc-700/70  text-zinc-400 px-2 py-1">
                        <span className="text-xs">
                            {address.slice(0, 5) + "..." + address.slice(-5)}
                        </span>
                        {
                            copied ?
                                <BiSolidCopyAlt size={16} />
                                :
                                <BiSolidCopy size={16} />
                        }

                    </button>
                </div>
                <div className="h-full flex items-center justify-end gap-4 text-white">

                    <div className="relative">
                        {icon ?
                            <img src={icon} alt="" className="h-4 w-4" />
                            :
                            <TbWorld size={22} />
                        }
                        <div className="h-3 w-3 bg-zinc-800 rounded-full absolute -bottom-1  -right-1  flex justify-center items-center ">
                            <div className={`h-1.5  w-1.5 rounded-full ${isConnect ? "bg-green-500 " : "bg-zinc-300"} `} />
                        </div>
                    </div>

                    <Menu>
                        <MenuButton className="inline-flex items-center rounded-full p-1 text-sm/6 font-semibold text-white shadow-inner  focus:outline-none data-[hover]:bg-zinc-700/50 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                            <BsThreeDotsVertical size={16} />
                        </MenuButton>
                        <Transition
                            enter="transition ease-out duration-75"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <MenuItems
                                anchor="bottom end"
                                className="w-52 origin-top-right rounded-xl border border-white/5 shadow-2xl   bg-zinc-800 p-1 z-[70] text-sm/6 text-white [--anchor-gap:var(--spacing-1)] focus:outline-none"
                            >
                                {
                                    dropmenulist.map((item, index) => (
                                        <div key={item.title}>
                                            <MenuItem >
                                                <button onClick={item.handleClick} className="group flex w-full items-center gap-2 rounded-lg py-3.5 px-4 data-[focus]:bg-white/10">
                                                    <item.icon />
                                                    {item.title}
                                                    {/* <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘E</kbd> */}
                                                </button>
                                            </MenuItem>
                                            {(index >= 1 && index < 2) &&
                                                <div className="my-1 h-px bg-white/60" />
                                            }
                                        </div>
                                    ))
                                }

                            </MenuItems>
                        </Transition>
                    </Menu>
                </div>
            </div>
        </div>
    )
}