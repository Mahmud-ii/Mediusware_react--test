import React, { useEffect, useState } from "react";
import { MenuItem, Select } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Icon from "@mui/material/Icon";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../store/slices/contactSlice";

const FormModal = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((store) => store.contact);
  let contacts = [];
  return (
    <Dialog fullWidth maxWidth="sm" open={isOpen}>
      <DialogContent>
        <Grid container>
          <Grid item xs={12}>
            <Grid container direction="row">
              <Grid item xs={8}>
                <Typography variant="h5">Contacts</Typography>
              </Grid>

              <Grid item xs={4} align="right">
                <IconButton
                  edge="start"
                  align="right"
                  color="inherit"
                  aria-label="Close"
                  style={{ padding: 8 }}
                  onClick={() => {
                    dispatch(closeModal());
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </Grid>
            </Grid>

            <Grid container direction="row" spacing={1}>
              <Grid item xs={12}>
                <TextField name="imageUrl" label="Search..." />
              </Grid>

              <Grid item xs={12}>
                <table className="table table-striped ">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contacts?.map((item, key) => (
                      <tr key={key}>
                        <td scope="col">{item.name}</td>
                        <td scope="col">{item.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Grid>

              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item container>
                    <Grid item xs={4}>
                      <Button
                        sx={{ color: "#46139f", border: "1px solid #46139f" }}
                        onClick={() => {
                          dispatch(closeModal());
                        }}
                      >
                        All Contacts
                      </Button>
                    </Grid>
                    <Grid item xs={4}>
                      <Button
                        sx={{ color: "#ff7f50", border: "1px solid #ff7f50" }}
                        onClick={() => {
                          dispatch(closeModal());
                        }}
                      >
                        US Contacts
                      </Button>
                    </Grid>
                    <Grid item xs={4}>
                      <Button
                        sx={{ color: "#46139f", border: "1px solid #46139f" }}
                        onClick={() => {
                          dispatch(closeModal());
                        }}
                      >
                        Close
                      </Button>
                    </Grid>
                    {/* <Grid item xs={6}>
                      <Button>SAVE</Button>
                    </Grid> */}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default FormModal;
