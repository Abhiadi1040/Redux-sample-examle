import React, { useReducer, useState ,link} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//import Button from '../../../reusable_components/Button'
//import '../../../styles/Config.css';
import { Row, Col, ListGroup } from 'react-bootstrap';
import Button from '../reusable_components/Button'
import RadioButton from '../reusable_components/RadioButton'
import DropDown from '../reusable_components/DropDown'
import LabelField from '../reusable_components/LabelField'
import { Link } from 'react-router-dom';

function ExpressionBuilderModal(props) {
    const {show1,hide}=props;
    const handleChange=()=>{
        console.log("dropdown clicked")
    }
    
    return (
      <>
      <div>
      <div style={{ 
                  flexDirection: 'row', 
                  display: 'flex', 
                  width:330, 
                  justifyContent:'flex-start',
                  height:30
                   }}>
                  <RadioButton></RadioButton>
                  <LabelField
                    value='Current Page'
                    textStyle={{alignItems:'flex-start'}}
                    mandatory={false}
                  />
                </div>

                <div style={{ 
                  flexDirection: 'row', 
                  display: 'flex', 
                  width:330, 
                  justifyContent:'flex-start',
                  height:30
                   }}>
                  <RadioButton></RadioButton>
                  <LabelField
                    value='All pages'
                    textStyle={{alignItems:'flex-start'}}
                    mandatory={false}
                  />
                  <Link style={{marginLeft:10, marginTop:5,color:'purple', fontSize:12}}>All pages help?</Link>
                </div>

                <div style={{ 
                  flexDirection: 'row', 
                  display: 'flex', 
                  width:330, 
                  justifyContent:'flex-start',
                  height:30
                   }}>
                  <RadioButton></RadioButton>
                  <LabelField
                    value='Selected pages'
                    textStyle={{alignItems:'flex-start'}}
                    mandatory={false}
                  />
                </div>
                <div style={{ 
                  flexDirection: 'row', 
                  display: 'flex', 
                  width:330, 
                  justifyContent:'flex-start',
                  height:30
                   }}>
                  <LabelField
                    value='Export Format'
                    textStyle={{alignItems:'flex-start',marginLeft:10}}
                    mandatory={false}
                  />
                  <DropDown value='asd' onChange={handleChange} label='Data Source' data={[
                  { value: 1, label: 'asd' },
                  { value: 2, label: 'dfg' }
                ]} />
                </div>

                <div style={{ 
                  flexDirection: 'row', 
                  display: 'flex', 
                  width:485, 
                  justifyContent:'flex-end',
                  height:30,
                //   border:'1px solid red'
                   }}>
                  <Button
                  value='Export'
                  onClick={handleChange} 
                  buttonStyle={{
                    alignItems:'flex-end',
                    width:110,
                    marginLeft:0,
                    background:"#f8f9fa",
                    borderColor:'#b9babd',
                    color:'black',
                    fontSize:12
                  }}
                  ></Button>
                  <Button
                  styleClass='app-button'
                  value='Cancel'
                  onClick={handleChange} 
                  buttonStyle={{
                    width:110,
                    alignItems:'flex-end',
                    marginLeft:5,
                    background:"#f8f9fa",
                    borderColor:'#b9babd',
                    color:'black',
                    fontSize:12
                  }}
                  ></Button>
                </div>
      </div>
      </>
    );
  }
  export default ExpressionBuilderModal;