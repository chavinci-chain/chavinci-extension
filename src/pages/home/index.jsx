import React from "react";
import { FiSend } from "react-icons/fi";
import { HiMiniWallet } from "react-icons/hi2";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

const custom_buttons = [
    {
        title: "Send",
        icon: FiSend,
        handleClick: () => console.log("Send")
    },
    {
        title: "Deposit",
        icon: HiMiniWallet,
        handleClick: () => console.log("Deposit")
    },
]

export default function Home() {

    return (
        <div className="flex w-full">
            <div className="flex flex-col  min-w-0 flex-2 w-full">
                <div className="flex flex-col justify-start  items-center flex-0">
                    <div className="flex flex-col items-center justify-between min-h-52 h-full min-w-0 w-full pt-3  ">
                        <div className="flex flex-0 flex-col items-center w-full ">
                            <div className="w-full my-4 px-4 items-center flex flex-col min-w-0  text-[2rem] font-medium text-white ">
                                <div>
                                    <span>
                                        0
                                    </span>
                                    <span className="ml-1">
                                        CHA
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row h-[68px] mb-6 ">
                            {
                                custom_buttons.map(item => (
                                    <CustomButton key={item.title} data={item} />
                                ))
                            }

                        </div>
                    </div>
                </div>
                <div className="flex-grow pt-0">
                    <CustomTab />
                </div>
            </div>
        </div>
    )
}


function CustomButton({ data }) {
    return (
        <button
            onClick={data.handleClick}
            className="cursor-pointer flex flex-col items-center justify-center text-center w-[60px]  text-sm text-white "
        >
            <div className=" bg-green-600 rounded-lg  w-9 h-9 my-[6px] flex items-center justify-center">
                <data.icon size={20} />
            </div>
            <p className="text-ellipsis overflow-hidden whitespace-nowrap ">
                {data.title}
            </p>
        </button>
    )
}


const tokens = [
    {
        network: "CHA",
        token: "CHA",
        amount: "120 CHA",
    },
    {
        network: "CHA",
        token: "CHA",
        amount: "120 CHA",
    },
    {
        network: "CHA",
        token: "CHA",
        amount: "120 CHA",
    },
    {
        network: "CHA",
        token: "CHA",
        amount: "120 CHA",
    },
    {
        network: "CHA",
        token: "CHA",
        amount: "120 CHA",
    },
    {
        network: "CHA",
        token: "CHA",
        amount: "120 CHA",
    },
    {
        network: "CHA",
        token: "CHA",
        amount: "120 CHA",
    },
    {
        network: "CHA",
        token: "CHA",
        amount: "120 CHA",
    },
]

const TokenTab = () => (

    <TabPanel>
        <ul className="flex  flex-col">
            {tokens.map((item, index) => (
                <li key={index} className="relative rounded-sm gap-4  text-sm/4 transition hover:bg-white/5">
                    <a href="#" className="flex flex-row items-center  py-4 px-6">
                        <div className="mr-4 h-8 w-8 relative items-center flex justify-center rounded-full ">
                            <img src="cha.png" alt="Chavinci Network" className=" rounded-full blur-[6px]  opacity-50  " />
                            
                            <img src="cha.png" alt="Chavinci Network" className="w-[62.5%] h-auto  absolute " />
                        </div>
                        <div className="flex items-center justify-between w-full  text-sm font-semibold text-white">
                            <div className="flex flex-col item-start gap-1" >
                                <span>
                                    {item.token}
                                </span>
                                <span className="text-white/80">
                                    {item.network}
                                </span>
                            </div>

                            <span>
                                {item.amount}
                            </span>

                        </div>
                    </a>

                </li>
            ))}
        </ul>
    </TabPanel>

)

const NFTTab = () => (
    <TabPanel className="flex flex-col items-center text-center justify-center p-12">
        <div className="text-gray-400 flex flex-col items-center ">
            <img src="no-nfts.png" alt="No NFT " />
            <div className="text-lg font-semibold text-center mt-4">
                <h4>
                    No NFTs yet
                </h4>
            </div>
        </div>
    </TabPanel>
)
const HistoryTab = () => (
    <TabPanel className="flex flex-col items-center justify-center ">
        <div className="text-gray-400  text-center text-base pt-12 ">
            You have no transactions
        </div>
    </TabPanel>
)
const categories = [
    {
        name: 'Tokens',
        element: TokenTab
    },
    {
        name: "NFT's",
        element: NFTTab
    },
    {
        name: 'Historys',
        element: HistoryTab
    },
]



function CustomTab() {
    return (
        <div>
            <TabGroup>
                <TabList className="flex  px-4   justify-center gap-1">
                    {categories.map(({ name }) => (
                        <Tab
                            key={name}
                            className="w-full   py-1 px-3 group text-base/6 data-[selected]:font-normal font-semibold text-white group  data-[hover]:border-b-[2px] transition-all  border-green-500 data-[selected]:border-b-[2px]  focus:outline-none   data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10  outline-none  "
                        >
                            {name}
                        </Tab>
                    ))}
                </TabList>
                <TabPanels className="mt-3 h-full  overflow-y-auto">
                    {categories.map((item, index) => (
                        <item.element key={index}/>
                    ))}
                </TabPanels>
            </TabGroup>

        </div>
    )
}



