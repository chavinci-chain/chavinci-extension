import { modalActions } from ".";
import store from "../";

export const createModal = (name, data = null, show = true) => store.dispatch(modalActions.showModal({ name, show, data }))

export const destroyModal = () => store.dispatch(modalActions.hideModal())
