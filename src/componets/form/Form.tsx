// import { useAppDispatch, useAppSelector } from "../../hooks/hooks"
// import { updateField } from "../../store/slices/formSlice"

// const Form: React.FC = () => {
//     const dispatch = useAppDispatch()
//     const {values, errors, status, isSubmitted, submitError} = useAppSelector((state) => state.form)

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//         const {name, value} =  e.target
//         dispatch(updateField({field: name as any, value}))
//     }

//     const validateEmail = (email: string) => {
//         if (!email) return "email обязательное поле"
//         if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
//       return 'Invalid email format';
//     }
//     return undefined;
//     }

//     const handleSubmit = 
// } 