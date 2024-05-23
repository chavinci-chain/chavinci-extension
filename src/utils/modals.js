import AccountDetails from "../components/modals/account-details";
import ChangeAccount from "../components/modals/change-account";
import ChangeNetwork from "../components/modals/change-network";

const modals = [
    {
        name:"network_change_modal",
        element: ChangeNetwork
    },
    {
        name:"account_change_modal",
        element: ChangeAccount
    },
    {
        name:"account_details",
        element: AccountDetails
    },
]

export default modals