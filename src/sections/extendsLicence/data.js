export const gridData = {
  rows: {
    ahdaf: [],
    barname: [],
    'heyat-moases': [],
    'heyat-modire': [],
    address: [],
    tamas: [],
    asnad: [
      {
        id: '1',
        state: 'ثبت سیستمی',
        uploadDocument: '',
        viewDocument: '',
        documentType: 'فاکتور خرید',
      },
      {
        id: '2',
        state: 'ثبت سیستمی',
        uploadDocument: '',
        viewDocument: '',
        documentType: 'رسید انبار',
      },
    ],
    peyvast: [],
  },
  columns: {
    ahdaf: [
      { field: 'id', headerName: 'ردیف', width: 40 },
      {
        field: 'assetName',
        headerName: 'نام کالای درخواستی',
        width: 150,
        editable: true,
      },
      {
        field: 'goodsCode',
        headerName: 'کد کالا',
        width: 150,
        editable: true,
      },
      {
        field: 'quantity',
        headerName: 'مقدار',
        width: 150,
        editable: true,
      },
      {
        field: 'asssetUnit',
        headerName: 'واحد کالا',
        width: 150,
        editable: true,
      },
      {
        field: 'description',
        headerName: 'توضیحات کاربر',
        width: 350,
        editable: true,
      },
    ],
    barname: [
      { field: 'id', headerName: 'ردیف', width: 40 },
      {
        field: 'description',
        headerName: 'شرح',
        width: 350,
        editable: true,
      },
    ],
    'heyat-moases': [
      { field: 'id', headerName: 'ردیف', width: 40 },
      {
        field: 'fullName',
        headerName: 'نام و نام خانوادگی',
        width: 150,
        editable: true,
      },
      {
        field: 'description',
        headerName: 'توضیحات',
        width: 200,
        editable: true,
      },
      {
        field: 'documents',
        headerName: 'مدارک مربوطه',
        width: 100,
        editable: true,
      },
    ],
    'heyat-modire': [
      { field: 'id', headerName: 'ردیف', width: 40 },
      {
        field: 'fullName',
        headerName: 'نام و نام خانوادگی',
        width: 150,
        editable: true,
      },
      {
        field: 'position',
        headerName: 'سمت سازمانی',
        width: 150,
        editable: true,
      },
      {
        field: 'duties',
        headerName: 'شرح وظایف',
        width: 150,
        editable: true,
      },
    ],
    address: [
      { field: 'id', headerName: 'ردیف', width: 40 },
      {
        field: 'addressType',
        headerName: 'نوع آدرس',
        width: 100,
        editable: true,
      },
      {
        field: 'address',
        headerName: 'نشانی',
        width: 350,
        editable: true,
      },
      {
        field: 'city',
        headerName: 'شهر',
        width: 90,
        editable: true,
      },
      {
        field: 'postalCode',
        headerName: 'کد پستی',
        width: 150,
        editable: true,
      },
      {
        field: 'district',
        headerName: 'منطقه شهرداری',
        width: 110,
        editable: true,
      },
      {
        field: 'description',
        headerName: 'توضیحات',
        width: 300,
        editable: true,
      },
    ],
    tamas: [
      { field: 'id', headerName: 'ردیف', width: 40 },
      {
        field: 'fullName',
        headerName: 'نام و نام خانوادگی',
        width: 150,
        editable: true,
      },
      {
        field: 'staticTel',
        headerName: 'تلفن ثابت',
        width: 150,
        editable: true,
      },
      {
        field: 'preNumber',
        headerName: 'پیش شماره',
        width: 100,
        editable: true,
      },
      {
        field: 'mobile',
        headerName: 'شماره همراه',
        width: 150,
        editable: true,
      },
      {
        field: 'description',
        headerName: 'توضیحات',
        width: 150,
        editable: true,
      },
    ],
    asnad: [
      { field: 'id', headerName: 'ردیف', width: 30 },
      {
        field: 'state',
        headerName: 'وضعیت',
        width: 90,
        editable: true,
      },
      {
        field: 'uploadDocument',
        headerName: 'بارگذاری مستند',
        width: 110,
        editable: true,
      },
      {
        field: 'viewDocument',
        headerName: 'مشاهده مستند',
        width: 110,
        editable: true,
      },
      {
        field: 'documentType',
        headerName: 'نوع مدرک',
        width: 140,
        editable: true,
      },
    ],
    peyvast: [
      { field: 'id', headerName: 'ردیف', width: 40 },
      {
        field: 'image',
        headerName: 'تصویر',
        width: 70,
        editable: true,
      },
      {
        field: 'attachmentGroup',
        headerName: 'گروه پیوست',
        width: 100,
        editable: true,
      },
      {
        field: 'attachmentName',
        headerName: 'نام پیوست',
        width: 80,
        editable: true,
      },
      {
        field: 'user',
        headerName: 'کاربر ثبت کننده',
        width: 120,
        editable: true,
      },
      {
        field: 'date',
        headerName: 'تاریخ',
        width: 80,
        editable: true,
      },
      {
        field: 'description',
        headerName: 'توضیحات',
        width: 80,
        editable: true,
      },
    ],
  },
};

export const GRID_DEFAULT_LOCALE_TEXT = {
  // Root
  noRowsLabel: 'property.list.noData',
  noResultsOverlayLabel: 'property.list.noResult',

  // Density selector toolbar button text
  toolbarDensity: 'Density',
  toolbarDensityLabel: 'Density',
  toolbarDensityCompact: 'Compact',
  toolbarDensityStandard: 'Standard',
  toolbarDensityComfortable: 'Comfortable',

  // Columns selector toolbar button text
  toolbarColumns: 'ستون ها',
  toolbarColumnsLabel: 'انتخاب ستون ها',

  // Filters toolbar button text
  toolbarFilters: 'فیلترها',
  toolbarFiltersLabel: 'نمایش فیلترها',
  toolbarFiltersTooltipHide: 'مخفی کردن فیلترها',
  toolbarFiltersTooltipShow: 'نمایش فیلترها',
  toolbarFiltersTooltipActive: (count) =>
    count !== 1 ? `${count} active filters` : `${count} active filter`,

  // Quick filter toolbar field
  toolbarQuickFilterPlaceholder: 'جستجو…',
  toolbarQuickFilterLabel: 'جستجو',
  toolbarQuickFilterDeleteIconLabel: 'پاکسازی',

  // Export selector toolbar button text
  toolbarExport: 'Export',
  toolbarExportLabel: 'Export',
  toolbarExportCSV: 'Download as CSV',
  toolbarExportPrint: 'Print',
  toolbarExportExcel: 'Download as Excel',

  // Columns management text
  columnsManagementSearchTitle: 'جستجو',
  columnsManagementNoColumns: 'ستونی وجود ندارد',
  columnsManagementShowHideAllText: 'نمایش/عدم نمایش همه',
  columnsManagementReset: 'بازنشانی',

  // Filter panel text
  filterPanelAddFilter: 'افزودن فیلتر',
  filterPanelRemoveAll: 'حذف همه',
  filterPanelDeleteIconLabel: 'حذف',
  filterPanelLogicOperator: 'Logic operator',
  filterPanelOperator: 'Operator',
  filterPanelOperatorAnd: 'And',
  filterPanelOperatorOr: 'Or',
  filterPanelColumns: 'Columns',
  filterPanelInputLabel: 'Value',
  filterPanelInputPlaceholder: 'Filter value',

  // Filter operators text
  filterOperatorContains: 'contains',
  filterOperatorEquals: 'equals',
  filterOperatorStartsWith: 'starts with',
  filterOperatorEndsWith: 'ends with',
  filterOperatorIs: 'is',
  filterOperatorNot: 'is not',
  filterOperatorAfter: 'is after',
  filterOperatorOnOrAfter: 'is on or after',
  filterOperatorBefore: 'is before',
  filterOperatorOnOrBefore: 'is on or before',
  filterOperatorIsEmpty: 'is empty',
  filterOperatorIsNotEmpty: 'is not empty',
  filterOperatorIsAnyOf: 'is any of',
  'filterOperator=': '=',
  'filterOperator!=': '!=',
  'filterOperator>': '>',
  'filterOperator>=': '>=',
  'filterOperator<': '<',
  'filterOperator<=': '<=',

  // Header filter operators text
  headerFilterOperatorContains: 'Contains',
  headerFilterOperatorEquals: 'Equals',
  headerFilterOperatorStartsWith: 'Starts with',
  headerFilterOperatorEndsWith: 'Ends with',
  headerFilterOperatorIs: 'Is',
  headerFilterOperatorNot: 'Is not',
  headerFilterOperatorAfter: 'Is after',
  headerFilterOperatorOnOrAfter: 'Is on or after',
  headerFilterOperatorBefore: 'Is before',
  headerFilterOperatorOnOrBefore: 'Is on or before',
  headerFilterOperatorIsEmpty: 'Is empty',
  headerFilterOperatorIsNotEmpty: 'Is not empty',
  headerFilterOperatorIsAnyOf: 'Is any of',
  'headerFilterOperator=': 'Equals',
  'headerFilterOperator!=': 'Not equals',
  'headerFilterOperator>': 'Greater than',
  'headerFilterOperator>=': 'Greater than or equal to',
  'headerFilterOperator<': 'Less than',
  'headerFilterOperator<=': 'Less than or equal to',

  // Filter values text
  filterValueAny: 'any',
  filterValueTrue: 'true',
  filterValueFalse: 'false',

  // Column menu text
  columnMenuLabel: 'منو',
  columnMenuShowColumns: 'نمایش ستون ها',
  columnMenuManageColumns: 'مدیریت ستون ها',
  columnMenuFilter: 'فیلتر',
  columnMenuHideColumn: 'مخفی کردن ستون',
  columnMenuUnsort: 'حذف مرتب سازی',
  columnMenuSortAsc: 'مرتب سازی صعودی',
  columnMenuSortDesc: 'مرتب سازی نزولی',

  // Column header text
  columnHeaderFiltersTooltipActive: (count) =>
    count !== 1 ? `${count} active filters` : `${count} active filter`,
  columnHeaderFiltersLabel: 'Show filters',
  columnHeaderSortIconLabel: 'Sort',

  // Rows selected footer text
  footerRowSelected: (count) =>
    count !== 1
      ? `${count.toLocaleString()} rows selected`
      : `${count.toLocaleString()} row selected`,

  // Total row amount footer text
  footerTotalRows: 'تعداد سطرها:',

  // Total visible row amount footer text
  footerTotalVisibleRows: (visibleCount, totalCount) =>
    `${visibleCount.toLocaleString()} از ${totalCount.toLocaleString()}`,

  // Checkbox selection text
  checkboxSelectionHeaderName: 'چک باکس',
  checkboxSelectionSelectAllRows: 'انتخاب همه سطرها',
  checkboxSelectionUnselectAllRows: 'عدم انتخاب همه سطرها',
  checkboxSelectionSelectRow: 'انتخاب سطر',
  checkboxSelectionUnselectRow: 'عدم انتخاب سطر',

  // Boolean cell text
  booleanCellTrueLabel: 'yes',
  booleanCellFalseLabel: 'no',

  // Actions cell more text
  actionsCellMore: 'بیشتر',

  // Column pinning text
  pinToLeft: 'Pin to left',
  pinToRight: 'Pin to right',
  unpin: 'Unpin',

  // Tree Data
  treeDataGroupingHeaderName: 'Group',
  treeDataExpand: 'see children',
  treeDataCollapse: 'hide children',

  // Grouping columns
  groupingColumnHeaderName: 'Group',
  groupColumn: (name) => `Group by ${name}`,
  unGroupColumn: (name) => `Stop grouping by ${name}`,

  // Master/detail
  detailPanelToggle: 'Detail panel toggle',
  expandDetailPanel: 'Expand',
  collapseDetailPanel: 'Collapse',

  // Used core components translation keys
  MuiTablePagination: {},

  // Row reordering text
  rowReorderingHeaderName: 'Row reordering',

  // Aggregation
  aggregationMenuItemHeader: 'Aggregation',
  aggregationFunctionLabelSum: 'sum',
  aggregationFunctionLabelAvg: 'avg',
  aggregationFunctionLabelMin: 'min',
  aggregationFunctionLabelMax: 'max',
  aggregationFunctionLabelSize: 'size',
};
