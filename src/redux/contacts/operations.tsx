import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://technical-task-api.icapgroupgmbh.com/api/";

interface Contact {
  id: string;
  name: string;
  birthday_date: string;
  email: string;
  phone_number: string;
  address: string;
}

interface ApiResponse {
  data: Contact[];
}

export const fetchContacts = createAsyncThunk<ApiResponse, number>(
  "contacts/fetchAll",
  async (offset, thunkAPI) => {
    try {
      const response = await axios.get(`table/?limit=10&offset=${offset}`);
      toast.success("success");
      console.log(response.data);
      return response.data;
    } catch (e: any) {
      toast.error("error");
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const changeContact = createAsyncThunk<Contact, Contact>(
  "contacts/changeContact",
  async (contact, thunkAPI) => {
    try {
      const response = await axios.put(`/table/${contact.id}/`, {
        name: contact.name,
        birthday_date: contact.birthday_date,
        email: contact.email,
        phone_number: contact.phone_number,
        address: contact.address,
      });
      toast.success("success");
      return response.data;
    } catch (e: any) {
      toast.error("error");
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
