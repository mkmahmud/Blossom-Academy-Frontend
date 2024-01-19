import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "userDetails",
  initialState: {
    user: {
      userId: "",
      firstName: "",
      lastName: "",
      bio: "",
      role: "",
      profileImage: "",
      phone: "",
      email: "",
      birthDate: "",
      country: "",
      address: "",
      city: "",
      zipCode: 0,
      socialProfile: {
        facebook: "",
        instagram: "",
        linkedin: "",
        youtube: "",
        github: "",
      },
      career: [
        {
          aboutMe: [
            {
              index: 1,
              title: "about",
            },
          ],
          education: [
            {
              institution: "",
              title: "",
              location: "",
              startYear: 0,
              endYear: 0,
              result: 0,
              description: "",
            },
            {
              institution: "",
              title: "",
              location: "",
              startYear: 0,
              endYear: 0,
              result: 0,
              description: "",
            },
          ],
          experience: [
            {
              institution: "",
              title: "",
              location: "",
              startYear: 0,
              endYear: 0,
              result: 0,
              description: "",
            },
            {
              institution: "",
              location: "",
              startYear: 0,
              endYear: 0,
              result: 4.5,
              description: "",
            },
            {
              institution: "",
              location: "",
              startYear: 0,
              endYear: 0,
              result: 0,
              description: "",
            },
          ],
          skills: [
            {
              index: 1,
              title: "",
            },
          ],
          certifications: [
            {
              index: 1,
              title: "",
              year: 0,
              credential: "",
            },
          ],
        },
      ],
    },
  },
  reducers: {
    addUserDetails: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { addUserDetails } = usersSlice.actions;

export default usersSlice.reducer;
