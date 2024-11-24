import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {
  DataGrid,
  GridRowModes,
  GridActionsCellItem,
  GridToolbarContainer,
} from '@mui/x-data-grid';
import { Iconify } from '../iconify/index';
import { GRID_DEFAULT_LOCALE_TEXT } from '../../sections/extendsLicence/data';
import { useTranslate } from 'src/locales';

export default function SimpleDataGrid({ columns, rows: initialRows, gridKey, handleDataChange }) {
  const [rows, setRows] = React.useState(initialRows);
  const [rowModesModel, setRowModesModel] = React.useState({});
  const [isSaveDisabled, setIsSaveDisabled] = React.useState(true);
  const translate = useTranslate();

  React.useEffect(() => {
    checkForChanges();
  }, [rows]);

  const handleSaveDataGrid = () => {
    handleDataChange(rows, gridKey);
    setIsSaveDisabled(true); // Disable save button after saving changes
  };

  const generateNewId = () => {
    const maxId = Math.max(...rows.map((row) => parseInt(row.id, 10)), 0);
    return (maxId + 1).toString();
  };

  const handleRowEditStop = (params, event) => {
    if (params.reason === 'rowFocusOut') {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newModel) => {
    setRowModesModel(newModel);
  };

  const handleAddClick = () => {
    const newId = generateNewId();
    setRows([...rows, { id: newId, isNew: true }]);
    setRowModesModel({ ...rowModesModel, [newId]: { mode: GridRowModes.Edit } });
  };

  const checkForChanges = () => {
    // Compare initialRows with current rows
    const hasChanges = JSON.stringify(initialRows) !== JSON.stringify(rows);
    setIsSaveDisabled(!hasChanges);
  };

  // Add the action buttons column
  const columnsWithActions = [
    {
      field: 'actions',
      type: 'actions',
      headerName: 'عملیات',
      width: 100,
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<Iconify icon="mdi:content-save" />}
              label="Save"
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<Iconify icon="material-symbols:cancel" />}
              label="Cancel"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<Iconify icon="material-symbols:edit" />}
            label="Edit"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<Iconify icon="material-symbols:delete" />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
    ...columns,
  ];
  console.log({ GRID_DEFAULT_LOCALE_TEXT });

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        sx={{ fontSize: 12 }}
        rows={rows}
        columns={columnsWithActions}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        hideFooterPagination={!rows.length}
        localeText={translate.t(GRID_DEFAULT_LOCALE_TEXT)}
        showColumnVerticalBorder
        showCellVerticalBorder
        density="compact"
        slots={{
          toolbar: () => (
            <GridToolbarContainer>
              <Button
                color="primary"
                sx={{ gap: 1 }}
                startIcon={<Iconify icon="mdi:add-circle" />}
                onClick={handleAddClick}
              >
                {translate.t('common.new')}
              </Button>
              <Button
                color="primary"
                sx={{ gap: 1 }}
                startIcon={<Iconify icon="mdi:content-save" />}
                onClick={handleSaveDataGrid}
                disabled={isSaveDisabled}
              >
                {translate.t('common.save')}
              </Button>
            </GridToolbarContainer>
          ),
        }}
      />
    </Box>
  );
}
