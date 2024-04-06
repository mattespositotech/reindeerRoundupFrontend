import { NavLink } from "react-router-dom";
import { Button, Container, Menu, MenuItem } from "semantic-ui-react";

export default function NavBar() {
  return (
    <Menu fixed='top'>
        <Container>
            <MenuItem header as={NavLink} to='/'>
                <img src="/src/assets/Raindeer Roundup.png" alt="logo" />
                Reindeer Roundup
            </MenuItem>
            <MenuItem name='About' as={NavLink} to='/about' />
            <MenuItem name='How It Works' as={NavLink} to='/howItWorks' />
            <MenuItem position="right">
                <Button basic content="Sign In" as={NavLink} to='/signIn' />
            </MenuItem>
        </Container>
    </Menu>
  )
}