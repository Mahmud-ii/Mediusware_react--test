import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getContactItems, openModal } from "../store/slices/contactSlice";
import FormModal from "./Modal";
import axios from "axios";

const Problem2 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactItems());
  }, [dispatch]);

  // Call the asynchronous function
  return (
    <>
      <FormModal />

      <div className="container">
        <div className="row justify-content-center mt-5">
          <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

          <div className="d-flex justify-content-center gap-3">
            <button
              className="btn btn-lg btn-outline-primary"
              type="button"
              onClick={() => {
                dispatch(openModal("all"));
              }}
            >
              All Contacts
            </button>
            <button
              className="btn btn-lg btn-outline-warning"
              type="button"
              onClick={() => {
                dispatch(openModal("us"));
              }}
            >
              US Contacts
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Problem2;
