import React from 'react';
import { FormikProvider, Form } from 'formik';

export default ({ formContext, children }) => (
    <FormikProvider value={formContext}>
        <Form>{children}</Form>
    </FormikProvider>
);
