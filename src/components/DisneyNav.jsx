import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { auth, provider } from "../firebase";
// import { useNavigate } from 'react-router-dom';
import { selectUserName, selectUserPhoto, setUserLoginDetails } from "../features/user/userSlice";
// import Login from "./Login";

const DisneyNav = (props) => {

    const dispatch = useDispatch();
    // const navigate = useNavigate();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    const handleAuth = () => {
        auth.signInWithPopup(provider).then((result) => {
            setUser(result.user);
        }).catch((error) => {
            alert(error.message)
        });
    };

    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
                
    })
        )
    }

    return (
    <Nav>
        <DisneyLogo>
            <img src = "/images/logo.svg" alt="Disney-Logo" />
        </DisneyLogo>
            {!userName ? (
                    <LoginButton onClick={handleAuth}>Login</LoginButton>
                ) : (
                    <>
                    <NavMenu>
                        <a href="/home">
                            <img src="/images/home-icon.svg" alt="HOME" />
                            <span>HOME</span>
                        </a>
                        <a href="/search">
                            <img src="/images/search-icon.svg" alt="SEARCH" />
                            <span>SEARCH</span>
                        </a>
                        <a href="/watchlist">
                            <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
                            <span>WATCHLIST</span>
                        </a>
                        <a href="/originals"> 
                            <img src="/images/original-icon.svg" alt="ORIGINALS" />
                            <span>ORIGINALS</span>
                        </a>
                        <a href="/movies">
                            <img src="/images/movie-icon.svg" alt="MOVIES" />
                            <span>MOVIES</span>
                        </a>
                    </NavMenu>
                    <UserImg src={userPhoto} alt={userName} />
                    </>
            )}
    </Nav>
  );
};

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 3;
`;

const DisneyLogo = styled.a`
    padding: 0;
    width: 80px;
    margin-top: 4px;
    max-height: 70px;
    font-size: 0;
    display: inline-block;
    img{
        display: block;
        width: 100%;
    }
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-flow: row nowrap;
    height: 100%;
    margin: 0px;
    padding: 0px;
    position: relative;
    margin-right: auto;
    margin-left: 25px;

    @media (max-width: 768px) {
        display: none;
    }

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
    

    img {
        height: 20px;
        min-width: 20px;
        width: 20px;
        z-index: auto;
    }

    span {
        color: rgb(249, 249, 249);
        font-size: 13px;
        letter-spacing: 1.42px;
        padding: 2px 0px;
        white-space: nowrap;
        position: relative;
    

    &:before {
        background-color: #0bb62d;
        /* background-color: #27a8fd; */
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
    }
}



&:hover{
    span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
        }
    }
}
`;

const LoginButton = styled.a`
    background-color: rgba(0, 0, 0, 0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    border-radius: 5px;
    transition: all 0.2s ease 0s;

    &:hover {
        background-color: #0bb62d;
        color: #f9f9f9;
        border-color: transparent;
    }
`;


const UserImg = styled.img`
    height: 100%;
    
`;

export default DisneyNav;