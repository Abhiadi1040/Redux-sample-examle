import React, { useState } from 'react';
import "./App.css";
import Button from './reusable_components/Button'
// import Dropdown from '../../reusable_components/DropDown';
import ModalComponent from './reusable_components/Modal';

import LabelField from './reusable_components/LabelField';
import {incNumber} from "./actions";
import {decNumber} from "./actions";

import { useSelector, useDispatch } from "react-redux";

const App = () => {

  // it alternative to the useContext hooks in react / consumer from context API
  const changeTheNumber = useSelector(state => state.changeTheNumber);
  const [modalApproveShow, setModalApproveShow] = useState(false);
  const dispatch = useDispatch();
  const show = () => setModalApproveShow(true)

  return (
    <>
      <div className="main-div">
      

      <div class="container">
      <LabelField
        value="Are you sure you want to Approve the selected entries?"
        textStyle={{
          height: "15px",
          marginBottom: 0,
          fontFamily: "Arial",
          width: "302px",
          fontSize: 11,
          fontWeight: "bold",
          
         
          marginTop: "10px",
          textAlign: "center"
        }}
        mandatory={false}
      />
      <Button
                            value='Get Data'
                            onClick={show}
                            buttonStyle={{
                                width: 110,
                                marginLeft: 170
                            }} />
                            <ModalComponent
  eleId="cnfModalApprove"
  modalStatus={modalApproveShow}
  size="sm"
  style={{ marginTop: "250px" }}
  onHide={() => {
    setModalApproveShow(false);
  }}
  title="Approve Entries"
  body={
    <>
      <LabelField
        value="Are you sure you want to Approve the selected entries?"
        textStyle={{
          height: "15px",
          marginBottom: 0,
          fontFamily: "Arial",
          width: "302px",
          fontSize: 11,
          fontWeight: "bold",
          
         
          marginTop: "10px",
          textAlign: "center"
        }}
        mandatory={false}
      />
      
    </>
  }
  modalBodyStyle={{ height: "85px", width: "400" }}
/>;
      <h1>Increment/Decrement counter</h1>
      <h4>using React and Redux</h4>
      
      <div class="quantity">
        <a class="quantity__minus" title="Decrement" onClick={() => dispatch(decNumber())}><span>-</span></a>
        <input name="quantity" type="text" class="quantity__input" value={changeTheNumber} />
        <a class="quantity__plus" title="Increment" onClick={() => dispatch(incNumber(5))}><span>+</span></a>
      </div>
      
          </div>
        </div>
    </>
  )
}

export default App
