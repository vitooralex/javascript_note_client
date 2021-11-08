import React, { Fragment,useState } from "react";
import HeaderLogged from '../../components/header_logged'
import Notes from '../../components/notes'
import { Column } from "rbx";
import "../../styles/notes.scss";

const NotesScreen = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <HeaderLogged setIsOpen={setIsOpen} />
            <Notes isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    )
}

export default NotesScreen;