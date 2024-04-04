import { Button, Container, Menu, MenuItem } from "semantic-ui-react";

export default function NavBar() {
  return (
    <Menu fixed='top'>
        <Container>
            <MenuItem header>
                <img src="/src/assets/Raindeer Roundup.png" alt="logo" />
                Reindeer Roundup
            </MenuItem>
            <MenuItem name='About' />
            <MenuItem name='How It Works' />
            <MenuItem position="right">
                <Button basic content="Sign In" />
            </MenuItem>
        </Container>
    </Menu>
  )
}