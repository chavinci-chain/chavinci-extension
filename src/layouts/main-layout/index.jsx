import React from 'react'
import { Outlet } from "react-router-dom";
import Modal from "../../components/modals";
import { useModals } from "../../store/modal/hooks";
import Container from "../../components/contianer";
import Header from "../../components/header";
export default function MainLayout() {

    const modals = useModals()

    return (
        <div className="flex flex-col w-full h-full overflow-x-hidden overflow-y-auto relative  font-display items-center">
            <Header/>
            <Container>
                <Outlet />
            </Container>
            {modals.show && <Modal />}
        </div>
    )
}
