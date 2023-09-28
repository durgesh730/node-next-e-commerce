'use client'
import React, { useState } from 'react';
import { RiSearchLine } from "react-icons/ri";
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import styles from "./Searchbar.module.css";

const Seachbar = () => {

    const [input, setInput] = useState("");
    const handleChange = (value) => {
        setInput(value);
    };

    return (
        <>
            <div className={styles.inputwrapper}>
                <RiSearchLine id="search-icon" className={styles.searchIcon} />
                <input
                    placeholder="Search by Name"
                    value={input}
                    className={styles.inputtag}
                    onChange={(e) => handleChange(e.target.value)}
                />

                <KeyboardArrowRightOutlinedIcon className={styles.searchIcon} />
            </div>
        </ >
    )
}

export default Seachbar
