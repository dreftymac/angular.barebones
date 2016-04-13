(function() {

    var valueCellStyle = {
        'text-align': 'right'
    };

    var columnDefs = [
        {
            field: "category", rowGroupIndex: 0, hide: true
        },
        {
            headerName: 'Section'
            ,"field": "amount1"
            //children: [
            //    {headerName: "Units", field: "amount1", width: 70, aggFunc: 'sum', cellStyle: valueCellStyle},
            //    {headerName: "GBP", field: "gbp1", width: 70, cellRenderer: currencyRenderer, aggFunc: 'sum', cellStyle: valueCellStyle}
            //]
        },
        {
            headerName: 'Subtitle'
            ,"field": "amount2"            
            //children: [
            //    {headerName: "Units", field: "amount2", width: 70, aggFunc: 'sum', cellStyle: valueCellStyle},
            //    {headerName: "GBP", field: "gbp2", width: 70, cellRenderer: currencyRenderer, aggFunc: 'sum', cellStyle: valueCellStyle}
            //]
        },
        {
            headerName: 'Status'
            ,"field": "amount3"            
            
            //children: [
            //    {headerName: "Units", field: "amount3", width: 70, aggFunc: 'sum', cellStyle: valueCellStyle},
            //    {headerName: "GBP", field: "gbp3", width: 70, cellRenderer: currencyRenderer, aggFunc: 'sum', cellStyle: valueCellStyle}
            //]
        }
        //,{
        //    headerName: 'Status',
        //    //children: [
        //    //    {headerName: "Units", field: "amountTotal", width: 70, aggFunc: 'sum', cellStyle: valueCellStyle},
        //    //    {headerName: "GBP", field: "gbpTotal", width: 70, cellRenderer: currencyRenderer, aggFunc: 'sum', cellStyle: valueCellStyle}
        //    //]
        //}
    ];

    var groupColumn = {
        headerName:     "Title",
        width:          400,
        field:          'item',
        comparator:     agGrid.defaultGroupComparator,
        cellRenderer: {
            renderer: "group"
        }
    };

    var gridOptions = {
        columnDefs              : columnDefs,
        rowData                 : createRowData(),
        rowSelection            : 'single',
        groupHeaders            : true,
        groupDefaultExpanded    : -1,
        groupIncludeFooter      : true,
        enableColResize         : true,
        enableSorting           : false,
        forPrint                : true,
        groupColumnDef          : groupColumn,
        suppressMenuColumnPanel : true,
        suppressMenuFilterPanel : true,
        suppressMenuMainPanel   : true,
        getRowHeight: function(params) {
            if (params.node.footer) {
                return 40;
            } else {
                return 25;
            }
        },
        icons: {
            groupExpanded: '<i class="fa fa-minus-square-o"></i> ',
            groupContracted: '<i class="fa fa-plus-square-o"></i> '
        },
        enableFilter: false
    };

    function createRowData() {
        var rows = [];
        ['[5.00] Roles and responsibilities'
         ,'[5.00] Roles and responsibilities'
         ,'[5.00] Roles and responsibilities'
         ,'[5.00] Roles and responsibilities'
         ,'[5.00] Roles and responsibilities'
         ,'[5.00] Roles and responsibilities'
         ,'[5.00] Roles and responsibilities'
         ,'[5.00] Roles and responsibilities'
         ].forEach( function (item) {
            rows.push({category: 'INTRODUCTION', item: item});
        });

        ['[5.00] Roles and responsibilities'
         ,'[5.00] Roles and responsibilities'
         ,'[5.00] Roles and responsibilities'
         ,'[5.00] Roles and responsibilities'        
         ].forEach( function (item) {
            rows.push({category: 'ACCOUNTING AND FINANCIAL REPORTING', item: item});
        });

        rows.forEach( function(row) {

            //row.amount1 = Math.round(Math.random() * 100);
            row.amount1 = 'repealed';
            row.amount2 = 'by UO Board of Trustees';
            row.amount3 = 'Wednesday December 12 2014';
            //row.amountTotal = row.amount1 + row.amount2 + row.amount3;

            row.gbp1 = row.amount1 * 22;
            row.gbp2 = row.amount2 * 22;
            row.gbp3 = row.amount3 * 22;
            //row.gbpTotal = row.amountTotal * 22;
        });

        return rows;
    }

    // setup the grid after the page has finished loading
    document.addEventListener('DOMContentLoaded', function() {
        var gridDiv = document.querySelector('#exampleAccountGrid');
        new agGrid.Grid(gridDiv, gridOptions);
    });

})();

