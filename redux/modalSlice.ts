import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

interface IModal {
  header: string;
  title: string;
  position: string;
  color: string;
  size: string;
  logoUrl: {
    url?: string;
  };
  device: string;
  autoClose: number;
  afterScroll: number;
  userEmail: string;
  signUpEmail: string;
  singleLanguage: string;
  multiLanguage: [];
}

const initialState: IModal = {
  header: 'Header',
  title: 'Title',
  position: 'top-[50%] left-[50%]',
  color: '',
  size: 'small',
  logoUrl: {},
  device: 'desktop',
  singleLanguage: '',
  multiLanguage: [],
  autoClose: 10,
  afterScroll: 50,
  userEmail: 'user@user.com',
  signUpEmail: 'user@user.com',
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    selectDevice: (state, action: PayloadAction<string>) => {
      state.device = action.payload;
    },
    autoClose: (state, action: PayloadAction<number>) => {
      state.autoClose = action.payload;
    },
    headerText: (state, action: PayloadAction<string>) => {
      state.header = action.payload;
    },
    afterPercentage: (state, action: PayloadAction<number>) => {
      state.afterScroll = action.payload;
    },
    imgPath: (state, action: PayloadAction<any>) => {
      state.logoUrl = action.payload;
    },
    userEmail: (state, action: PayloadAction<string>) => {
      state.userEmail = action.payload;
    },
    signupEmail: (state, action: PayloadAction<string>) => {
      state.signUpEmail = action.payload;
    },
    setSingleLanguage: (state, action: PayloadAction<string>) => {
      state.singleLanguage = action.payload;
    },
    setMultiLanguage: (state, action: PayloadAction<[]>) => {
      state.multiLanguage = [...action.payload];
    },
    setModalColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },
    setModalSize: (state, action: PayloadAction<string>) => {
      state.size = action.payload;
    },
    setModalPosition: (state, action: PayloadAction<string>) => {
      state.position = action.payload;
    },
  },
});
export const {
  selectDevice,
  autoClose,
  headerText,
  afterPercentage,
  imgPath,
  userEmail,
  signupEmail,
  setSingleLanguage,
  setMultiLanguage,
  setModalColor,
  setModalSize,
  setModalPosition,
} = modalSlice.actions;
export default modalSlice.reducer;
