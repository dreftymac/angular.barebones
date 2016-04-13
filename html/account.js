(function() {

    var valueCellStyle = {
        'text-align': 'right'
    };

    var columnDefs = [
        {
            field: "category", rowGroupIndex: 0, hide: true
        },
        {
            headerName: ''
            ,"field": "fasmstat"
        },
        {
            headerName: 'Status'
            ,"field": "fasmauth"            
        },
        {
            headerName: ''
            ,"field": "fasmdate"            
        }
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

            //row.fasmstat = Math.round(Math.random() * 100);
            row.fasmstat = 'repealed';
            row.fasmauth = 'by UO Board of Trustees';
            row.fasmdate = 'Wednesday December 12 2014';
            //row.amountTotal = row.fasmstat + row.fasmauth + row.fasmdate;

            row.gbp1 = row.fasmstat * 22;
            row.gbp2 = row.fasmauth * 22;
            row.gbp3 = row.fasmdate * 22;
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

