import React from 'react';
import { SiYoutube } from "react-icons/si";
import { MdSearch } from "react-icons/md";

const Navbar = () => {
    return (
        <div className="navbar">
            <SiYoutube className="react-icons-youtube" />
            <span className="headlineText">Youtube</span>
            <form className="TodoInsert">
            <input className="input" placeholder="검색어를 입력해주세요" />
            <button type="submit"><MdSearch/></button>
            </form>
            
        </div>
    );
}
export default Navbar;