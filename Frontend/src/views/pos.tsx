import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
import NavBarO from "../components/navbarO";
import PosLateral from "../components/pos-lateral";
import PosCentral from "../components/pos-central";
import Row from 'react-bootstrap/Row';


const POS:React.FC = () => (
    <div >
        <NavBarO></NavBarO>
        <Row>
            <PosLateral></PosLateral>
            <PosCentral></PosCentral>
        </Row>
    </div>  

)

export default POS;