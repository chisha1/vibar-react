import React from 'react';
import Link from 'next/link';
//import '../../../CSS/Menu/menu.css'
import Container from '@material-ui/core/Container';
import styled from 'styled-components';

//#region CSS
const NavigationBar = styled.nav`
    margin-top: 10px;
    position: fixed;
    width: 100%;
    z-index: 2;
    top: 0;
`

const LogoContainer = styled.div`
    width: auto;
    top: 15px;
    height: 40px;
    display: -webkit-inline-flex;
    display: inline-flex;
`

const Logo = styled.img`
    height: 100%;
`

const LinksContainer = styled.div`
    display: inline-block;
    vertical-align: super;
    padding: 20px;
`

const LinkList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    font-size: 17px;
`

const ListItem = styled.li`
    display: inline;
`

const NavLinkText = styled.a`
    color: #585858;
    cursor: pointer;
    font-weight: 600;
    margin: 0 10px 0 10px;
    text-decoration: none;
`

const MenuSearchBar = styled.input`
    border-radius: 13px;
    border: none;
    padding: 0 10px 2px 10px;
    height: 25px;
`

//#endregion

const Menu = () => (
    <Container maxWidth='lg'>
    <NavigationBar>
        {
            //Top Navigation
        }
        {
            //<div className="container">
        }
            <LogoContainer>
                <Logo src="/Assets/Images/Logo/Website_Logo_outline.png" />
                    {//<div className="arrow down"></div>
                    }
            </LogoContainer>
            <LinksContainer>
                <LinkList>
                    <ListItem>
                        <MenuSearchBar placeholder="Search"/>
                    </ListItem>
                    <ListItem>
                        <Link href="/">
                            <NavLinkText>Home</NavLinkText>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="/artists">
                            <NavLinkText>Artists</NavLinkText>
                        </Link>
                    </ListItem>

                    {
                        // if user is logged in, add a create playlist button and add song button for admins
                    }
                </LinkList>
                {
                    //log-in partial/component here
                }
            </LinksContainer>
            <div className="user-details">
                <div className="user-image">
                    {
                        //@Html.Action("GetUserImage", "User", new {userID = userID})
                    }
                </div>
            </div>
        {
            //</div>
        }
        </NavigationBar>
    </Container>
);

export default Menu;
