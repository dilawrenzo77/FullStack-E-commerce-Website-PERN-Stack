import React from 'react';
import './confirm.css';
import Footer from "../../components/footer/footer";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { FaHandHoldingUsd } from "react-icons/fa";

const Confirm = () => {
    return (
        <div>
            <div className="confirmContent">
                <div className="confirmation">
                    <LiaMoneyBillWaveSolid size={200} className='moneyIcon'/>
                    <h1 className="confirmationMessage">Thanks for Shopping <FaHandHoldingUsd size={25} className='handIcon'/> on FlowTech</h1>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Confirm;
