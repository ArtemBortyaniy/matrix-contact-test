import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, changeContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsInitialState = {
  contactsArr: [],
  isLoading: false,
  error: null,
  count: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  extraReducers: builder => {
    builder
      //all contacts
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contactsArr = action.payload.results;
        state.count = action.payload.count;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      //update contacts
      .addCase(changeContact.pending, handlePending)
      .addCase(changeContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const currentContact = action.payload;
        const newContacts = state.contactsArr.map(contact =>
          contact.id === currentContact.id
            ? {
                id: contact.id,
                name: currentContact.name,
                birthday_date: currentContact.birthday_date,
                email: currentContact.email,
                phone_number: currentContact.phone_number,
                address: currentContact.address,
              }
            : contact
        );
        state.contactsArr = newContacts;
      })
      .addCase(changeContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
