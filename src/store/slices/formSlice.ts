import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TServiceOption = "painting" | "repair" | "washing"

interface IFormValues {
    name: string;
    phone: string;
    email: string;
    service: TServiceOption | ""
}

interface IFormState {
    values: IFormValues;
    errors: Partial<Record<keyof IFormValues, string>>;
    status: "idle" | "loading" | "succeeded" | "failed";
    submitError: string | null;
    isSubmitted: boolean;
}

const initialState: IFormState = {
    values: {
        name: "",
        phone: "",
        email: "",
        service: "",
    },
    errors: {},
    status: "idle",
    submitError: null,
    isSubmitted: false,
}

const formSlise = createSlice({
    name: "form",
    initialState,
    reducers: {
        updateField: <K extends keyof IFormValues>(
            state,
            action: PayloadAction<{ field: K; value: IFormValues[K] }>
        ) => {
            state.values[action.payload.field] = action.payload.value
        },
        setErrors: (state, action: PayloadAction<IFormState["errors"]>) => {
            state.errors = action.payload
        },
        clearErrors: (state) => {
            state.errors = {}
        },
        submitFormStart: (state) => {
            state.status = "loading";
            state.submitError = null;
            state.isSubmitted = true;
        },
        submitFormSuccess: (state) => {
            state.status = "succeeded"
            state.submitError = null
        },

        submitFormFailure: (state) => {
            state.status = "failed"
            state.submitError = "errorSumbit"
        },

    }


}

)

export const {
    updateField, setErrors, clearErrors, submitFormStart, submitFormSuccess, submitFormFailure
} = formSlise.actions

export default formSlise.reducer