export const tab = [
    'Base Information',
    'Detail',
];

export const info = {
    'Car ID': 'CAR111222',
    'Prod ID': ['ProdAABB.11','ProdAABB.22'],
    'Test Name': 'ProdTestName'
};

export const base = [
	{
      data: [
        {key: 'Type', value: 'Production'},
        {key: 'Sub Type', value: 'Production'},
        {key: 'Last Claimed TS', value: '2021-10-13-01.27.00.498213'},
        {key: 'Lot Status', value: 'Waiting', btn: 'Info'},
        {key: 'Flow Batch ID', value: ''},
        {key: 'Description', value: 'This is Production Desc'},
        {key: 'Lot Owner ID', value: 'MFG', btn: 'Gate Pass >>'},
        {key: 'Lot Cost Owner ID', value: 'MFG', btn: 'Inter Bay Xfer'},
        {key: 'Lot Owner Dept', value: 'MFG', btn: 'Stock Out'},
        {key: 'Count', value: '1'},
        {key: 'Color', value: 'Red'},
        {key: 'Staus', value: 'prepare'} // 沒給
      ]
    }
];

export const detail = [
	{
      data: [
        {key: 'Type', value: 'Production'},
        {key: 'Sub Type', value: 'Production'},
        {key: 'Due TS', value: '2020-07-04-11.43.00.000213'},
        {key: 'Current Status', value: 'Waiting'},
        {key: 'Bank ID', value: ''},
        {key: 'Status List', value: 
            [
                {StateName:'Previous State', StateValue:'ACTIVE'},
                {StateName:'Test State', StateValue:'Always OK'}
            ]
        }
      ]
    }
];
