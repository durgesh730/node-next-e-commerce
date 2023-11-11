import styles from './Navbar.module.css'
import Seachbar from './Search/Seachbar'
import { BsCart3 } from 'react-icons/bs';
import { PiUserLight } from 'react-icons/pi';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import * as React from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';

const Navbar = () => {
  const user = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  const [hidden, setHidden] = useState(false);
  const route = useRouter()

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleLogout = (e) => {
    handleClose(e);
    localStorage.clear();
    toast.success('Logout Successfully')
    route.push('/login')
  }

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  useEffect(() => {
    if (user) {
      setHidden(true);
    } else {
      setHidden(false)
    }
  }, [user])

  return (
    <>
      <div className={styles.english} >
        <div className={styles.offertext} >
          <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!ShopNow</span> </div>
        <div className={styles.lang} > <span>English</span></div>
      </div>

      <div className={styles.topnav} >
        <Link href={'/'}><span className={styles.logo} >Durgesh</span><br /> <small className={styles.alpha} >Alpha e-commerces</small> </Link>
        <div> <Seachbar /> </div>
        <div className={styles.RegSigCart} >
          {!hidden ?
            <>
              <Link href={'/signup'}>Register</Link>
              <Link href={'/login'} className={styles.navSign} ><PiUserLight /> Sign in</Link>
            </>
            :
            <>
              <Link href={'/cart'} className={styles.navcart} ><BsCart3 />  Cart </Link>
              <span
                ref={anchorRef}
                id="composition-button"
                aria-controls={open ? 'composition-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "5px", cursor: "pointer" }} >
                <PiUserLight />
                Account
              </span>

              <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === 'bottom-start' ? 'left top' : 'left bottom',
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList
                          autoFocusItem={open}
                          id="composition-menu"
                          aria-labelledby="composition-button"
                          onKeyDown={handleListKeyDown}
                        >
                          <MenuItem onClick={handleClose}>Profile</MenuItem>
                          <MenuItem onClick={handleClose}>My account</MenuItem>
                          <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </>
          }
        </div>
      </div>
    </>
  )
}

export default Navbar
