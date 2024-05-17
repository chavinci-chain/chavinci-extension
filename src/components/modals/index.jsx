import React from "react";
import modalsData from '../../utils/modals'
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import { useModals } from '../../store/modal/hooks'
import { destroyModal } from '../../store/modal/actions';

export default function Modal() {
    const modals = useModals();

    function close() {
        destroyModal()
    }

    const modal = modalsData.find(m => m.name === modals?.name);


    return (
        <Transition appear show={modals.show}>
            <Dialog as="div" className="relative z-50 focus:outline-none" onClose={close}>
                
                <div className="fixed inset-0 z-[60] bg-white/20  w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <TransitionChild
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 transform-[scale(95%)]"
                            enterTo="opacity-100 transform-[scale(100%)]"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 transform-[scale(100%)]"
                            leaveTo="opacity-0 transform-[scale(95%)]"
                        >
                            <DialogPanel className="w-full max-w-md rounded-md  bg-primary  p-6 backdrop-blur-2xl">

                                <modal.element />
                            </DialogPanel>

                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}