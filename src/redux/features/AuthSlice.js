import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authServices from "./AuthServices";
import { toast } from "react-toastify";

const initialState = {
  isLoggedIn: false,
  user: null,
  users: [],
  twoFactor: false,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  // changePassMsg:"",
  // vendorUser: 0,
  verifiedUsers: 0,
  suspendedUsers: 0,
  // paymentId:""
};

// register thunkApi
export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      return await authServices.register(userData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// login thunkApi
export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      return await authServices.login(userData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// logout thunkApi
export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      return await authServices.logout();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// getLoginStatus thunkApi
export const getLoginStatus = createAsyncThunk(
  "auth/getLoginStatus",
  async (_, thunkAPI) => {
    try {
      return await authServices.getLoginStatus();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// getUser thunkApi
export const getUser = createAsyncThunk("auth/getUser", async (_, thunkAPI) => {
  try {
    return await authServices.getUser();
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// updateUser thunkApi
export const updateUser = createAsyncThunk(
  "auth/updateUser",
  async (userData, thunkAPI) => {
    try {
      return await authServices.updateUser(userData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// sendVerificationEmail thunkApi
export const sendVerificationEmail = createAsyncThunk(
  "auth/sendVerificationEmail",
  async (_, thunkAPI) => {
    try {
      return await authServices.sendVerificationEmail();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// verifyUser thunkApi
export const verifyUser = createAsyncThunk(
  "auth/verifyUser",
  async (verifyToken, thunkAPI) => {
    try {
      return await authServices.verifyUser(verifyToken);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// changePassword thunkApi
export const changePassword = createAsyncThunk(
  "auth/changePassword",
  async (userData, thunkAPI) => {
    try {
      return await authServices.changePassword(userData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// forgotPassword thunkApi
export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (userData, thunkAPI) => {
    try {
      return await authServices.forgotPassword(userData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//  resetPassword thunkApi
export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async ({ userData, resetToken }, thunkAPI) => {
    try {
      console.log(resetToken);
      return await authServices.resetPassword({ userData, resetToken });
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//  getUsers thunkApi
export const getUsers = createAsyncThunk(
  "auth/getUsers",
  async (_, thunkAPI) => {
    try {
      return await authServices.getUsers();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//  deleteUser thunkApi
export const deleteUser = createAsyncThunk(
  "auth/deleteUser",
  async (id, thunkAPI) => {
    try {
      return await authServices.deleteUser(id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//  upgradeRole thunkApi
export const upgradeRole = createAsyncThunk(
  "auth/upgradeRole",
  async (userData, thunkAPI) => {
    try {
      return await authServices.upgradeRole(userData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//  sendLoginCode thunkApi
export const sendLoginCode = createAsyncThunk(
  "auth/sendLoginCode",
  async (email, thunkAPI) => {
    try {
      return await authServices.sendLoginCode(email);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
//  loginWithCode thunkApi
export const loginWithCode = createAsyncThunk(
  "auth/loginWithCode",
  async ({ email, code }, thunkAPI) => {
    try {
      return await authServices.loginWithCode({ email, code });
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
//  loginWithGoogle thunkApi
export const loginWithGoogle = createAsyncThunk(
  "auth/loginWithGoogle",
  async (userToken, thunkAPI) => {
    try {
      return await authServices.loginWithGoogle(userToken);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    RESET(state) {
      state.twoFactor = false;
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
    },
    CALA_VERIFIED_USER(state, action) {
      const array = [];
      state.users.map((user) => {
        const { isVerified } = user;
        return array.push(isVerified);
      });
      let count = 0;
      array.forEach((item) => {
        if (item === true) {
          count += 1;
        }
      });

      state.verifiedUsers = count;
    },
    CALA_SUSPENDED_USER(state, action) {
      const array = [];
      state.users.map((user) => {
        const { role } = user;
        return array.push(role);
      });
      let count = 0;
      array.forEach((item) => {
        if (item === "suspend") {
          count += 1;
        }
      });

      state.suspendedUsers = count;
    },
  },

  extraReducers: (builder) => {
    //for registering the user
    builder
      .addCase(registerUser.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        state.user = action.payload;
        console.log(action.payload);
        toast.success("Registration successful");
      })

      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
        toast.error(action.payload);
      })

      //for login the user
      // builder
      .addCase(loginUser.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        state.user = action.payload;
        console.log(action.payload);
        toast.success("Login successful");
      })

      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
        toast.error(action.payload);
        if (action.payload.includes("New device")) {
          state.twoFactor = true;
        }
      })

      //for logout the user
      // builder
      .addCase(logoutUser.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(logoutUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = false;
        state.user = null;
        console.log(action.payload);
        toast.success(action.payload);
      })

      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })

      //for login status of user
      // builder
      .addCase(getLoginStatus.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(getLoginStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = action.payload;
      })

      .addCase(getLoginStatus.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      //for get user
      // builder
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        state.user = action.payload;
        // console.log(action.payload);
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })

      //for updateUser
      // builder
      .addCase(updateUser.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        state.user = action.payload;
        toast.success("user update");
      })

      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })

      // for sendVerificationEmail
      .addCase(sendVerificationEmail.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(sendVerificationEmail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
        toast.success(action.payload);
      })

      .addCase(sendVerificationEmail.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })

      // for verifyUser
      .addCase(verifyUser.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(verifyUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
        // state.user = action.payload;
        toast.success(action.payload);
      })

      .addCase(verifyUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })

      // for changePassword
      .addCase(changePassword.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(changePassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
        // state.user = null
        state.isLoggedIn = false;
        toast.success(action.payload);
      })

      .addCase(changePassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isLoggedIn = true;
        state.message = action.payload;
        toast.error(action.payload);
      })

      // for forgotPassword
      .addCase(forgotPassword.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
        toast.success(action.payload);
      })

      .addCase(forgotPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })

      // for resetPassword
      .addCase(resetPassword.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(resetPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
        toast.success(action.payload);
      })

      .addCase(resetPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })

      // for getUsers
      .addCase(getUsers.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
        state.users = action.payload;
        toast.success(action.payload);
      })

      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })

      // for deleteUser
      .addCase(deleteUser.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(deleteUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
        toast.success(action.payload);
      })

      .addCase(deleteUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })

      // for upgradeRole
      .addCase(upgradeRole.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(upgradeRole.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
        toast.success(action.payload);
      })

      .addCase(upgradeRole.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })

      // for sendLoginCode
      .addCase(sendLoginCode.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(sendLoginCode.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
        toast.success(action.payload);
      })

      .addCase(sendLoginCode.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })

      // for loginWithCode
      .addCase(loginWithCode.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(loginWithCode.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        state.twoFactor = false;
        state.user = action.payload;
        state.message = action.payload;
        toast.success("Login successful");
      })

      .addCase(loginWithCode.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.user = null;
        state.message = action.payload;
        toast.error(action.payload);
      })

      // for loginWithGoogle
      .addCase(loginWithGoogle.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(loginWithGoogle.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        state.user = action.payload;
        state.message = action.payload;
        toast.success(action.payload);
      })

      .addCase(loginWithGoogle.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.user = null;
        state.message = action.payload;
        toast.error(action.payload);
      });
  },
});

export const { RESET, CALA_SUSPENDED_USER, CALA_VERIFIED_USER } =
  authSlice.actions;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;
