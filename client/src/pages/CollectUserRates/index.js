import React from 'react';
import { useFormik } from 'formik';

import { Card, Title, FormContainer, Select, Row, Button } from '../../components';
import { useFetch } from '../../hooks';

import companyList from './constants';

export default () => {
    const [collectUserRates, data, loading, error] = useFetch({ url: '/api/collect-user-rates', method: 'POST' });

    const initialValues = {
        company: '',
    };

    const onSubmit = ({ company }) => {
        collectUserRates({
            body: {
                company,
            },
        });
    };

    const formContext = useFormik({
        initialValues,
        onSubmit,
    });

    return (
        <>
            <Card style={{ marginBottom: '2rem' }}>
                <Title>Сбор оценок пользователей</Title>
            </Card>

            <Card>
                <FormContainer formContext={formContext}>
                    <Row>
                        <Select name="company" options={companyList} label="Выберите команию" />
                    </Row>
                    <Row style={{ justifyContent: 'center' }}>
                        <Button type="submit">Собрать оценки</Button>
                    </Row>
                </FormContainer>
            </Card>
        </>
    );
};
