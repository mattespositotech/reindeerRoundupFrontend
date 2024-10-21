import { Dropdown, DropdownItem, DropdownMenu, Header, Icon } from "semantic-ui-react";
import { useUserContext } from "../../context/userContext";

export default function UserMenu() {
    const { getUser, logUserOut} = useUserContext();

    return (
        <>
            <Header as='h4' style={{ margin: 0 }}>
                <Icon name='user' />{getUser().email}
            </Header>
            <Dropdown inline>
                <DropdownMenu>
                    <DropdownItem text='Logout' onClick={logUserOut} />
                </DropdownMenu>
            </Dropdown>
        </>
    )
}