import React, { useState } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import { Typography } from "@mui/material";
import { Iconify } from "../iconify/index";

const CardView = ({ columns, rows }) => {
  const [cards, setCards] = useState(rows);
  const [newCard, setNewCard] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [viewImage, setViewImage] = useState("");

  const handleAddCard = () => {
    setCards([...cards, { id: cards.length + 1, ...newCard }]);
    setNewCard({});
  };

  const handleFieldChange = (index, field, value) => {
    const updatedCards = [...cards];
    updatedCards[index][field] = value;
    setCards(updatedCards);
  };

  const handleFileUpload = (index, field, file) => {
    const updatedCards = [...cards];
    updatedCards[index][field] = URL.createObjectURL(file);
    setCards(updatedCards);
  };

  const handleViewDocument = (image) => {
    setViewImage(image);
    setOpenModal(true);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <Button color="primary"  startIcon={<Iconify icon="mdi:add-circle" />} sx={{alignSelf: 'flex-start',gap:1}} onClick={handleAddCard}>
        جدید
      </Button>
      <Grid container spacing={2}>
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={card.id}>
            <Card sx={{ padding: 2 }}>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                ردیف: {index + 1}
              </Typography>
              {columns.map((column) => {
                if (column.field === "id") {
                  return null;
                }

                return (
                  <Box key={column.field} sx={{ mb: 2 }}>
                    <Typography variant="body2" color="text.secondary">
                      {column.headerName}:
                    </Typography>
                    {column.field === "uploadDocument" ? (
                      <Box>
                        <input
                          type="file"
                          accept="image/*"
                          style={{ display: "none" }}
                          id={`upload-${card.id}`}
                          onChange={(e) =>
                            handleFileUpload(index, column.field, e.target.files[0])
                          }
                        />
                        <label htmlFor={`upload-${card.id}`}>
                          <IconButton component="span">
                            <Iconify icon="material-symbols-light:drive-folder-upload-rounded" />
                          </IconButton>
                        </label>
                      </Box>
                    ) : column.field === "viewDocument" ? (
                      card.uploadDocument && (
                        <IconButton
                          onClick={() => handleViewDocument(card.uploadDocument)}
                        >
                          <Iconify icon="material-symbols-light:visibility" />
                        </IconButton>
                      )
                    ) : (
                      <TextField
                        fullWidth
                        variant="outlined"
                        size="small"
                        value={card[column.field] || ""}
                        onChange={(e) =>
                          handleFieldChange(index, column.field, e.target.value)
                        }
                      />
                    )}
                  </Box>
                );
              })}

            </Card>
          </Grid>
        ))}
      </Grid>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <img src={viewImage} alt="Document" style={{ width: "100%" }} />
        </Box>
      </Modal>
    </Box>
  );
};

export default CardView;
