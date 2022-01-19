import React, { useState } from 'react'
import '../styles/TableStyle.css';
import ReactToExcel from 'react-html-table-to-excel';
import { Image } from 'react-bootstrap';
import ExelImage from '../assets/xl.png';
import PrintImage from '../assets/printer.png';
import FilterImage from '../assets/filter.png';
import settings from '../assets/settings.png';
import ModalComponent from './Modal';
import { Row, Col } from 'react-bootstrap';
import Checkbox from './checkbox';
import RadioButton from './RadioButton';
import InputField from './InputField';
import Button from './Button';
import {PrintButton} from '../styles/CreateEditRule';
import ExportExcelModal from '../reusable_components/ExportExcelModal'
const TableHeader = (props) => {
    const { pageIndex,
        tableDataCount,
        pageSize,
        pageOptions,
        canPreviousPage,
        canNextPage,
        previousPage,
        gotoPage,
        nextPage,
        pageCount,
        pageNumbers,
        tableId,
        columns,
        refreshButton
    } = props;
    console.log("........................>>>",columns)
    const [printOptModal, setprintOptModal] = useState(false);
    const hideprintOptModal = () => setprintOptModal(false);
    const showprintOptModal = () => setprintOptModal(true);
    const [checkedItems, setCheckedItems] = useState({}); //plain object as state
    const [PageSelection, setPageSelection] = useState('');
    const [previewCheck, setPreviewCheck] = useState(false);
    const [modalShow, setmodalShow] = useState(false); 
    const hide = () => setmodalShow(false);
    const show = () => setmodalShow(true);
    const handleChange = (val, event) => {
     console.log("event.target.name>>",event.target.name.toString())
        setCheckedItems({ ...checkedItems, [event.target.name]: event.target.checked });
     //   columns = columns.filter(function(val) { return val.accessor != event.target.name; });
        // var evenNumbers1 = [];
        // columns.forEach(col => {
        //     console.log("col>>>>>>>>>>>>",col);
        //     if (col.accessor !== event.target.name){
        //         evenNumbers1.push(col)
        //     }
        // })
        // console.log("evenNumbers1>>",evenNumbers1);
        // columns=evenNumbers1
    }
    const handleChangeRadio = (val, evt) => {
        setPageSelection(val.target.name);
    }
    const handleclick=()=>{
        console.log("refresh button clicked")
    }

    const PrintOptionBody = ({tableId
    }) => (
            <div>
                <div className='PrintRowDiv'>
                    <div style={{ height: "100%", width: "100%", fontSize: 13 ,marginLeft: 8,}}><p style={{ paddingLeft: 2 ,marginTop:3}}>Print Options</p></div>
                    <div style={{ height: "100%", width: "100%", fontSize: 13 ,marginTop:3,marginLeft: 33}}><p>Columns to Print</p></div>
                </div>
                <div className='PrintRowDiv'>
                    <div style={{  width: "100%",height: 140}}>
                        <span style={{background:"red",height: 130,}}>
                            <RadioButton
                                label='Current Page'
                                onChange={handleChangeRadio}
                                name='currentPage'
                                checked={PageSelection === "currentPage"}
                            />
                            <RadioButton
                                label='All Pages'
                                onChange={handleChangeRadio}
                                name='allPage'
                                checked={PageSelection === "allPage"}
                            />
                            <RadioButton
                                label='Specify Pages'
                                onChange={handleChangeRadio}
                                name='specifyPages'
                                checked={PageSelection === "specifyPages"}
                            />
                            <div className='PrintRowDiv'>
                                <InputField
                                    type='text'
                                    label='Rule Event Tag'
                                    name='ruleEveTag'
                                    textFieldStyle={{ width: 60,height:20,marginTop:6}}
                                    // value={userInput.ruleEveTag}
                                    onChange={handleChange}
                                />
                                <p style={{ marginLeft: 8, fontSize: 12,marginTop:3}}>to</p>
                                <InputField
                                    textFieldStyle={{ width: 60,height:20,marginTop:6}}
                                    type='text'
                                    label='Rule Event Tag'
                                    name='ruleEveTag'
                                    // value={userInput.ruleEveTag}
                                    onChange={handleChange}
                                />
                                <p style={{ marginLeft: 8, fontSize: 12,marginTop:3}}>(Max 1)</p>
                            </div>
                        </span>
                        <div style={{  width: "100%",height: 10,marginLeft:10,fontSize:14}}>
                           <Checkbox  name="previewcheck" label="Preview Before Print" checked={previewCheck}  onChange={() => setPreviewCheck(true)}/>
                           </div>
                    </div>
                    <div className="tablesecLdiv">
                    <span className='PrintRowDiv' style={{ height: 32, fontSize: 13 ,marginLeft:5}}>
                                    <Checkbox style={{}} name={"all"} label={"All"}  checked={checkedItems["all"]}  onChange={handleChange} />
                                </span>
                        {
                            columns.map(item => (
                                <span className='PrintRowDiv' style={{ height: 32, fontSize: 13 ,marginLeft:5}} key={item.key}>
                                    <Checkbox style={{}} name={item.accessor} label={item.Header} checked={checkedItems[item.accessor]} onChange={handleChange} />
                                </span>
                            ))
                        }
                    </div>
                  
                </div>
                <div style={{marginLeft:330,marginTop:15}}>
                            <Button
                                onClick={() => {
                var divToPrint = document.getElementById(tableId);
                var htmlToPrint = '' +
                    '<style type="text/css">' +
                    ' thead tr:nth-child(1) th {' +
                    ' display:none;' +
                    '}' +
                    'table,table th, table td {' +
                    'border:1px solid #000;' +
                    'padding;0.5em;' +
                    '}' +
                    '</style>';
                htmlToPrint += divToPrint.outerHTML;
                var newWin = window.open("");
                newWin.document.write(htmlToPrint);
                newWin.print();
                newWin.close();
            }}
                            value='Print'
                           // buttonStyle={DefButton} 
                           buttonStyle={PrintButton} 
                            />
                                <Button
                           onClick={hideprintOptModal}
                            value='Cancel'
                            buttonStyle={PrintButton} 
                         
                            />
                             </div>
            </div>
        );
    return (
        <div class="pagination">
            <span class="spanitem">
                Item {' '}
                <span>
                    {pageIndex + 1} to {pageSize}  of {tableDataCount}.
                  </span > {' '}Page{' '}
                <span>
                    {pageIndex + 1} of {pageOptions.length}{' '}
                </span> <span class="btnLeft" />  | <span class="btnLeft" />
            </span>
            <ion-icon name="play-skip-back-outline" class="ionTable" onClick={() => gotoPage(0)} disabled={!canPreviousPage}></ion-icon>
            <ion-icon name="caret-back-outline" class="ionTable" onClick={() => previousPage()} disabled={!canPreviousPage} ></ion-icon>
            <ion-icon name="caret-forward-outline" class="ionTable" onClick={() => nextPage()} disabled={!canNextPage}></ion-icon>
            <ion-icon name="play-skip-forward-outline" class="ionTable" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}></ion-icon>
            <span class="gotoLeft">
                | {' '}Go to page:
        </span>
            {' '}
            <select
                class="gotoSelect"
                onChange={e => {
                    const page = e.target.value ? Number(e.target.value) - 1 : 0
                    gotoPage(page)
                }}
                value={pageIndex + 1}
            >
                {pageNumbers.map(pageSize => (
                    <option key={pageSize} value={pageSize}>
                        {pageSize}
                    </option>
                ))}
            </select>
            {refreshButton===true?(
                
                <Button value='Refresh' onClick={handleclick} buttonStyle={{color:'black',background:"#f8f9fa",borderColor:'#b9babd',marginLeft:30,height:25,paddingTop:0,borderRadius:3,fontSize:13}}></Button>
            ):null}
            <Image className="settingsImage" src={settings}></Image>
            <span class="selcetAfterprint">|</span>
            <ion-icon name="funnel-outline" class="iconFilterleft"></ion-icon>
            <ion-icon name="funnel-outline" class="iconFilteMiddle"></ion-icon>
            <Image className="filterIcon" src={FilterImage} ></Image>
            <span class="selcetAfterprint">|</span>
            <Image className="printlogo" src={PrintImage}
                onClick={showprintOptModal}     
            ></Image>
              <Image className="image" src={ExelImage} onClick={show}></Image>
            <span class="spanRight">|</span>
            <ModalComponent modalStatus={printOptModal} size="xs" onHide={hideprintOptModal} title="Print Options" body={<PrintOptionBody tableId={tableId}  />} modalBodyStyle={{ height: 260 }} style={{ marginTop: "150px" }} />
            <ModalComponent modalStatus={modalShow} size="xs" onHide={hide} title="FunctionEditor" body={<ExportExcelModal/>} modalBodyStyle={{ height:175 }} />
        </div>
    )


};


export default TableHeader;