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
            ,"width": 75
            
        },
        {
            headerName: ''
            ,"field": "fasmauth"            
            ,"width": 75
        },
        {
            headerName: ''
            ,"field": "fasmdate"            
            ,"width": 75
        }
    ];

    var groupColumn = {
        headerName:     "Title",
        width:          525,
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
        suppressContextMenu     : true,
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
        rows = vinput;
        return rows;
    }

    // setup the grid after the page has finished loading
    document.addEventListener('DOMContentLoaded', function() {
        var gridDiv = document.querySelector('#exampleAccountGrid');
        new agGrid.Grid(gridDiv, gridOptions);
    });

})(jsonp02);
