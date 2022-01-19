
//menu items for Config side menu
export const configMenu = [
  {
    key: 'Accounting-Configuration',
    label: 'Accounting Configuration',
    nodes: [
      {
        key: 'Product-Setup',
        label: 'Product Setup',
        nodes: [
          {
            key: 'second-level-node-1',
            label: 'Node 1 ',
            route: 'google.com',
          },
          {
            key: 'second-level-node-2',
            label: 'Node 2 ',
            route: '',
          },
        ],
      },
      {
        key: 'LOB-Setup',
        label: 'LOB Setup',
        nodes: [
          {
            key: 'second-level-node-1',
            label: 'Node 1 ',
            route: '',
          },
        ],
      },
      {
        key: 'Portfolio-Setup',
        label: 'Portfolio Setup',
        nodes: [
          {
            key: 'second-level-node-1',
            label: 'Node 1 ',
            route: '',
          },
        ],
      },
      {
        key: 'Chart-of-Accounts-Configuration',
        label: 'Chart of Accounts Configuration',
        nodes: [
          {
            key: 'Create/Edit-Ledger',
            label: 'Create/Edit Ledger',
            route: '',
          },
          {
            key: 'Create/Edit-Base-Account-Type',
            label: 'Create/Edit Base Account Type',
            route: '',
          },
          {
            key: 'Create/Edit-Ledger-Account-Type',
            label: 'Create/Edit Ledger Account Type',
            route: '',
          },
          {
            key: 'Create/Edit-Accounts',
            label: 'Create/Edit Accounts',
            route: '',
          },
        ],
      },
      {
        key: 'Accounting-Rules-Setup',
        label: 'Accounting Rules Setup',
        nodes: [
          {
            key: 'second-level-node-1',
            label: 'Create/Edit Rules',
            route: '',
          },
          {
            key: 'Create/Edit-Rule-Reversal-Profile',
            label: 'Create/Edit Rule Reversal Profile',
            route: '',
          },
          {
            key: 'Create/Edit-Reversal-Profile',
            label: 'Create/Edit Reversal Profile',
            route: '',
          },
          {
            key: 'second-level-node-4',
            label: 'Add/Remove Rule Subscription',
            route: '',
          },
        ],
      },
      {
        key: 'Mapping-Rules',
        label: 'Mapping Rules',
        nodes: [
          {
            key: 'Add/Remove-Basis-Mapping',
            label: 'Add/Remove Basis Mapping',
            route: '',
          },
          {
            key: 'Add/Remove-Rule-Basis-Mapping',
            label: 'Add/Remove Rule Basis Mapping',
            route: '',
          },
          {
            key: 'Create/Edit-Mapping-Keys',
            label: 'Create/Edit Mapping Keys',
            route: '',
          },
          {
            key: 'Create/Edit-Mapping-Relation',
            label: 'Create/Edit Mapping Relation',
            route: '',
          },
          {
            key: 'Create/Edit-Mapping-key-Relation',
            label: 'Create/Edit Mapping key Relation',
            route: '',
          },
          {
            key: 'Create/Edit-Account-Mapping',
            label: 'Create/Edit Account Mapping',
            route: '',
          },
        ],
      },
      {
        key: 'Accounting-Period-Setup',
        label: 'Accounting Period Setup',
        nodes: [
   {
            key: 'Create/Edit-Accounting-Period',
            label: 'Create/Edit Accounting Period',
            route: '',
          },
        ],
      },
      {
        key: 'Portfolio-Mapping',
        label: 'Portfolio Mapping',
        nodes: [
          {
            key: 'Create/Edit-PortfolioGroup',
            label: 'Create/Edit PortfolioGroup',
            route: '',
          },
          {
            key: 'PortfolioGroup-Mapping',
            label: 'PortfolioGroup Mapping',
            route: '',
          },
          {
            key: 'External-Ledger',
            label: 'External Ledger',
            route: '',
          },
          {
            key: 'External-Ledger-Segment',
            label: 'External Ledger Segment',
            route: '',
          },
          {
            key: 'Create/Edit-Ledger-Mapping',
            label: 'Create/Edit Ledger Mapping',
            route: '',
          },
        ],
      },
      {
        key: 'Bulk-Operation',
        label: 'Bulk Operation',
        nodes: [
          {
            key: 'Node1',
            label: 'Node1',
            route: '',
          },
        ],
      },
      {
        key: 'Calendar',
        label: 'Calendar',
        nodes: [
          {
            key: 'Node1',
            label: 'Node1',
            route: '',
          },
        ],
      },
    ]
  }
];

//menu items for Accounting side menu
export const accountingMenu = [
  {
    key: 'Accounting-Configuration',
    label: 'Accounting Configuration',
    nodes: [
      {
        key: 'Product-Setup',
        label: 'Product Setup',
        nodes: [
          {
            key: 'Create/Edit-Rules',
            label: 'Create/Edit Rules',
            route: '/dashboard',
          },
          {
            key: 'Create/Edit-Reversal-Profile',
            label: 'Create/Edit Reversal Profile',
            route: '/dashboard',
          },
          {
            key: 'Create/Edit-Rule-Reversal-Profile',
            label: 'Create/Edit Rule Reversal Profile',
            route: '/dashboard',
          },
          {
            key: 'Add/Remove-Rule-Subscription',
            label: 'Add/Remove Rule Subscription',
            route: '/dashboard',
          }
        ]
      },
      {
        key: 'LOB-Setup',
        label: 'LOB Setup',
        nodes: [
          {
            key: 'Create/Edit-Rules',
            label: 'Create/Edit Rules',
            route: '/dashboard',
          },
          {
            key: 'Create/Edit-Reversal-Profile',
            label: 'Create/Edit Reversal Profile',
            route: '/dashboard',
          },
          {
            key: 'Create/Edit-Rule-Reversal-Profile',
            label: 'Create/Edit Rule Reversal Profile',
            route: '/dashboard',
          },
          {
            key: 'Add/Remove-Rule-Subscription',
            label: 'Add/Remove Rule Subscription',
            route: '/dashboard',
          }
        ],
      },
      {
        key: 'Chart-of-Accounts-Configuration',
        label: 'Chart of Accounts Configuration',
        nodes: [
          {
            key: 'Create/Edit-Ledger',
            label: 'Create/Edit Ledger',
            route: '',
          },
          {
            key: 'Create/Edit-Base-Account-Type',
            label: 'Create/Edit Base Account Type',
            route: '',
          },
          {
            key: 'Create/Edit-Ledger-Account-Type',
            label: 'Create/Edit Ledger Account Type',
            route: '',
          },
          {
            key: 'Create/Edit-Accounts',
            label: 'Create/Edit Accounts',
            route: '',
          },
        ],
      },
      {
        key: 'Accoounting-Basis-Setup',
        label: 'Accoounting Basis Setup',
        nodes: [
          {
            key: 'Create/Edit-Rules',
            label: 'Create/Edit Rules',
            route: '/dashboard',
          },
          {
            key: 'Create/Edit-Reversal-Profile',
            label: 'Create/Edit Reversal Profile',
            route: '/dashboard',
          },
          {
            key: 'Create/Edit-Rule-Reversal-Profile',
            label: 'Create/Edit Rule Reversal Profile',
            route: '/dashboard',
          },
          {
            key: 'Add/Remove-Rule-Subscription',
            label: 'Add/Remove Rule Subscription',
            route: '/dashboard',
          }
        ],
      },
      {
        key: 'Business-Event-Setup',
        label: 'Business Event Setup',
        nodes: [
          {
            key: 'Create/Edit-Rules',
            label: 'Create/Edit Rules',
            route: '/dashboard',
          },
          {
            key: 'Create/Edit-Reversal-Profile',
            label: 'Create/Edit Reversal Profile',
            route: '/dashboard',
          },
          {
            key: 'Create/Edit-Rule-Reversal-Profile',
            label: 'Create/Edit Rule Reversal Profile',
            route: '/dashboard',
          },
          {
            key: 'Add/Remove-Rule-Subscription',
            label: 'Add/Remove Rule Subscription',
            route: '/dashboard',
          }
        ],
      },
      {
        key: 'Portfolio-Setup',
        label: 'Portfolio Setup',
        nodes: [
          {
            key: 'Create/Edit-Rules',
            label: 'Create/Edit Rules',
            route: '/dashboard',
          },
          {
            key: 'Create/Edit-Reversal-Profile',
            label: 'Create/Edit Reversal Profile',
            route: '/dashboard',
          },
          {
            key: 'Create/Edit-Rule-Reversal-Profile',
            label: 'Create/Edit Rule Reversal Profile',
            route: '/dashboard',
          },
          {
            key: 'Add/Remove-Rule-Subscription',
            label: 'Add/Remove Rule Subscription',
            route: '/dashboard',
          }
        ],
      },
      {
        key: 'Accounting-Rules-Setup',
        label: 'Accounting Rules Setup',
        nodes: [
          {
            key: 'Create/Edit-Rules',
            label: 'Create/Edit Rules',
            route: '/dashboard',
          },
          {
            key: 'Create/Edit-Reversal-Profile',
            label: 'Create/Edit Reversal Profile',
            route: '/dashboard',
          },
          {
            key: 'Create/Edit-Rule-Reversal-Profile',
            label: 'Create/Edit Rule Reversal Profile',
            route: '/dashboard',
          },
          {
            key: 'Add/Remove-Rule-Subscription',
            label: 'Add/Remove Rule Subscription',
            route: '/dashboard',
          }
        ],
      },
      {
        key: 'Mapping-Rules',
        label: 'Mapping Rules',
        nodes: [
          {
            key: 'Create/Edit-Rules',
            label: 'Create/Edit Rules',
            route: '/dashboard',
          },
          {
            key: 'Create/Edit-Reversal-Profile',
            label: 'Create/Edit Reversal Profile',
            route: '/dashboard',
          },
          {
            key: 'Create/Edit-Rule-Reversal-Profile',
            label: 'Create/Edit Rule Reversal Profile',
            route: '/dashboard',
          },
          {
            key: 'Add/Remove-Rule-Subscription',
            label: 'Add/Remove Rule Subscription',
            route: '/dashboard',
          }
        ],
      },
      {
        key: 'Accounting-Period-Setup',
        label: 'Accounting Period Setup',
        nodes: [

        ],
      },
      {
        key: 'Portfolio-Mapping',
        label: 'Portfolio Mapping',
        nodes: [

        ],
      },
      {
        key: 'Bulk-Operation',
        label: 'Bulk Operation',
        nodes: [

        ],
      },
      {
        key: 'Calendar',
        label: 'Calendar',
        nodes: [

        ],
      },
    ],
  }
];

//menu items for Amortization side menu
export const amortizationMenu = [
  {
    key: 'Debt-Amortization',
    label: 'Debt Amortization',
    nodes: [
      {
        key: 'Amortization-Manager',
        label: 'Amortization Manager',
        nodes: []
      }
    ]
  }
];

//menu items for Movement side menu
export const movementMenu = [
  {
    key: 'Securitization',
    label: 'Securitization',
    nodes: [
      {
        key: 'Account-Movement',
        label: 'Account Movement',
        nodes: [
          {
            key: 'Create/Edit-Profile',
            label: 'Create/Edit Profile',
            route: '/dashboard',
          },
          {
            key: 'Move-Balances',
            label: 'Move Balances',
            route: '/dashboard',
          },
          {
            key: 'Move-Activities',
            label: 'Move Activities',
            route: '/dashboard',
          },
          {
            key: 'Transcation Status',
            label: 'Transcation Status',
            route: '/dashboard',
          }
        ]
      },
    ],
  }
];

//menu items for Admin side menu
export const adminMenu = [
  {
    key: 'Admin',
    label: 'Admin',
    nodes: [
      {
        key: 'Users-Editor',
        label: 'Users Editor',
        nodes: []
      },
      {
        key: 'Users-Role-Mapping',
        label: 'Users Role Mapping',
        nodes: []
      },
      {
        key: 'Role-Function-Mapping',
        label: 'Role Function Mapping',
        nodes: []
      },
    ]
  }
];