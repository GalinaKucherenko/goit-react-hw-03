import css from "./ContactForm.module.css";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const UserSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, "Minimum 3 letters")
        .max(50, "Maximum 30 letters")
        .required("This field is required"),
    number: Yup.number()
        .min(3, "Minimum 3 numbers")
        .max(50, "Maximum 50 numbers")
        .required("This field is required"),
});

export default function ContactForm({onAdd}) {
    const handleSubmit = (values, actions) => {
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={{
            name: "Galina",
            number: "886-99-92",
        }}
            onSubmit={handleSubmit}
        >
            <Form>
                <div className={css.container}>
                    <label>Name</label>
                    <Field className={css.input} type="text" name="name" />
                    <label>Number</label>
                    <Field className={css.input} type="text" name="number" />
                    <button className={css.button} type="submit">Add contact</button>
                </div>
            </Form>
        </Formik>
    );
}