"use client";

import { Box, Button, Modal, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { FormResponse } from "../../common/interfaces/form-response.interface";
import createProduct from "../actions/create-product";

interface CreateProductModalProps {
  open: boolean;
  handleClose: () => void;
}

export default function CreateProductModal({
  open,
  handleClose,
}: CreateProductModalProps) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [response, setResponse] = useState<FormResponse>();

  const onClose = () => {
    setResponse(undefined);
    handleClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <form
          className="w-full max-w-xs"
          action={async (formData) => {
            const response = await createProduct(formData);
            setResponse(response);
            if (!response.error) {
              onClose();
            }
          }}
        >
          <Stack spacing={2}>
            <TextField
              name="name"
              label="Name"
              variant="outlined"
              helperText={response?.error}
              error={!!response?.error}
              required
            />
            <TextField
              name="description"
              label="Description"
              variant="outlined"
              helperText={response?.error}
              error={!!response?.error}
              required
            />
            <TextField
              name="price"
              label="Price"
              variant="outlined"
              helperText={response?.error}
              error={!!response?.error}
              required
            />
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
}
