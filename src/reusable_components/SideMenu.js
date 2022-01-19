import React from 'react';
import TreeMenu from 'react-simple-tree-menu'
import '../styles/SideMenu.css'
import * as SideMenuConstant from './Sidemenu-constants.js'

class SideMenu extends React.Component {
   render() {
      const { history,menu } = this.props;
      const treeData= menu==='config'?SideMenuConstant.configMenu:
      menu==='accounting'?SideMenuConstant.accountingMenu:
      menu==='admin'?SideMenuConstant.adminMenu:
      menu==='amortization'?SideMenuConstant.amortizationMenu:
      menu==='movement'?SideMenuConstant.movementMenu:null;
      return (
         <div className="sidemenu-container">
            <TreeMenu
               data={treeData}
               onClickItem={({ key, label, route }) => {
                  history.push(route);
               }}
               // hasSearch={false}
            />
         </div>
      );
   }
}

export default SideMenu;