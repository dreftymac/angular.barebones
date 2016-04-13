(function(vinput) {

    var valueCellStyle = {
        'text-align': 'right'
    };

    var columnDefs = [
        {
            field: "fasmhead", rowGroupIndex: 0, hide: true
        },
        {
            headerName: ''
            ,"field": "fasmstat"
            ,"width": 100
            
        },
        {
            headerName: ''
            ,"field": "fasmauth"            
            ,"width": 100
        },
        {
            headerName: ''
            ,"field": "fasmdate"            
            ,"width": 100
        }
    ];

    var groupColumn = {
        headerName:     "Title",
        width:          450,
        field:          'fasmsect',
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
        groupIncludeFooter      : false,
        enableColResize         : true,
        enableSorting           : true,
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
        //['[5.00] Roles and responsibilities'
        // ,'[5.00] Roles and responsibilities'
        // ,'[5.00] Roles and responsibilities'
        // ,'[5.00] Roles and responsibilities'
        // ,'[5.00] Roles and responsibilities'
        // ,'[5.00] Roles and responsibilities'
        // ,'[5.00] Roles and responsibilities'
        // ,'[5.00] Roles and responsibilities'
        // ].forEach( function (item) {
        //    rows.push({fasmhead: 'INTRODUCTION', item: item});
        //});
        //
        //['[5.00] Roles and responsibilities'
        // ,'[5.00] Roles and responsibilities'
        // ,'[5.00] Roles and responsibilities'
        // ,'[5.00] Roles and responsibilities'        
        // ].forEach( function (item) {
        //    rows.push({fasmhead: 'ACCOUNTING AND FINANCIAL REPORTING', item: item});
        //});
        //
        //rows.forEach( function(row) {
        //    row.fasmstat = 'repealed';
        //    row.fasmauth = 'by UO Board of Trustees';
        //    row.fasmdate = "12\/10\/2014";
        //});
        rows = vinput;
        return rows;
    }

    // setup the grid after the page has finished loading
    document.addEventListener('DOMContentLoaded', function() {
        var gridDiv = document.querySelector('#exampleAccountGrid');
        new agGrid.Grid(gridDiv, gridOptions);
    });

})(jsonp02);
