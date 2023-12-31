import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { BsCart3 } from 'react-icons/bs';
import { PiUserLight } from 'react-icons/pi';
import { useRouter } from 'next/router';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';

import styles from './Navbar.module.css';
import Seachbar from './Search/Seachbar';
import toast from 'react-hot-toast';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const route = useRouter();

  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  useEffect(() => {
    const userToken = localStorage.getItem('token');
    setIsLoggedIn(!!userToken);
  }, []);

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
    localStorage.clear();
    e.preventDefault();
    handleClose(e);
    toast.success('Logout Successfully')
    route.push('/login');
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  return (
    <>
      <div className={styles.english}>
        <div className={styles.offertext}>
          <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! Shop Now</span>
        </div>
        <div className={styles.lang}>
          <span>English</span>
        </div>
      </div>

      <div className={styles.topnav}>
        <Link href={'/'}>
          <span className={styles.logo}>Durgesh</span>
          <br />
          <small className={styles.alpha}>Alpha e-commerces</small>
        </Link>
        <div>
          <Seachbar />
        </div>
        <div className={styles.RegSigCart}>
          {isLoggedIn ? (
            <>
              <Link href={'/cart'} className={styles.navcart}>
                <BsCart3 /> Cart{' '}
              </Link>
              <span
                ref={anchorRef}
                id="composition-button"
                aria-controls={open ? 'composition-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                className={styles.accountButton}
              >
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
          ) : (
            <>
              <Link href={'/signup'}>Register</Link>
              <Link href={'/login'} className={styles.navSign}>
                <PiUserLight /> Sign in
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
