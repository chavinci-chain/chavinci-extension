import React from "react";
import { createModal, destroyModal } from "../../../store/modal/actions";
import { IoMdClose } from "react-icons/io";
import { FaRegTrashAlt } from "react-icons/fa";
import Jazzicon from "react-jazzicon/dist/Jazzicon";
import { PiPlugsConnected } from "react-icons/pi";
import { RiAppsFill } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
export default function ChangeAccount() {
    const handleClose = () => {
        destroyModal()
    }
    const dropmenulist = [
        {
            title: "Account Details",
            handleClick: () => createModal("account_details"),
            icon: RiAppsFill
        },
        {
            title: "View in Explorer",
            handleClick: () => window.open("https://explorer.cha.network"),
            icon: PiPlugsConnected
        },
    ]

    return (
        <div className="flex flex-col max-h-full h-full pb-6">
            <div className="pr-3 pt-4 pb-6 flex justify-between">
                <div className="ml-6 w-[calc(100%-48px)]" >
                    <header className="text-center font-bold text-base text-white">
                        Select an Account
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
                        {/* <Jazzicon diameter={40} seed={parseInt(depositAddress.address)} /> */}
                        <Jazzicon diameter={40} seed={"parseInt(depositAddress.address)"} />
                    </div>
                    <div className="w-full flex-1 overflow-hidden text-start flex flex-col items-start">
                        <span className="text-ellipsis whitespace-nowrap overflow-hidden font-normal text-sm    ">
                            Account 1
                        </span>
                        <span className="text-ellipsis whitespace-nowrap overflow-hidden font-normal text-sm   text-white/70">
                            cAjjaop...aljskfla
                        </span>
                    </div>
                    <div className="flex items-center gap-1 ">
                        <img src="./cha.png" className="w-3 h-3  " alt="Chavinci Network" />
                        <span className="text-xs text-white font-medium  ">
                            12CHA
                        </span>
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
                                                </button>
                                            </MenuItem>
                                        </div>
                                    ))
                                }

                            </MenuItems>
                        </Transition>
                    </Menu>
                </div>
                <div className=" relative cursor-pointer w-full justify-between items-center flex gap-2 p-4  ">
                    {/* <div className="left-1 w-1 h-[calc(100%-8px)] absolute top-1 bg-green-500 rounded-full " /> */}
                    <div className="flex items-center  justify-center rounded-full w-8 h-8 overflow-hidden max-w-8 flex-[0_0_32px] uppercase ">
                        {/* <Jazzicon diameter={40} seed={parseInt(depositAddress.address)} /> */}
                        <Jazzicon diameter={40} seed={"parseInt(depositAddress.address)"} />
                    </div>
                    <div className="w-full flex-1 overflow-hidden text-start flex flex-col items-start">
                        <span className="text-ellipsis whitespace-nowrap overflow-hidden font-normal text-sm    ">
                            Account 2
                        </span>
                        <span className="text-ellipsis whitespace-nowrap overflow-hidden font-normal text-sm   text-white/70">
                            cAjjaop...aljskfla
                        </span>
                    </div>
                    <div className="flex items-center gap-1 ">
                        <img src="./cha.png" className="w-3 h-3  " alt="Chavinci Network" />
                        <span className="text-xs text-white font-medium  ">
                            5CHA
                        </span>
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
                                                </button>
                                            </MenuItem>
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