import { NavLink } from "react-router-dom";
import { Button, Container, Menu, MenuItem } from "semantic-ui-react";
import { useUserContext } from "../../context/userContext";
import UserMenu from "./UserMenu";

export default function NavBar() {
  const { signedIn } = useUserContext();
  return (
    <Menu fixed='top'>
      <Container>
        <MenuItem header as={NavLink} to='/'>
          <img src="/src/assets/Raindeer Roundup.png" alt="logo" />
          Reindeer Roundup
        </MenuItem>
        <MenuItem name='About' as={NavLink} to='/about' />
        <MenuItem name='How It Works' as={NavLink} to='/howItWorks' />
        {signedIn && <MenuItem name='Your Roundups' as={NavLink} to='/roundup/user' />}
        <MenuItem position="right">
          {signedIn ?
            <UserMenu />: <Button basic content="Sign In" as={NavLink} to='/signIn' />}
        </MenuItem>
      </Container>
    </Menu>
  )
}