import React, { useLayoutEffect } from 'react';
import { Table, TableCell, TableRow, TableHead, TableBody } from '@mui/material';
import { Card, Title } from '../../components';
import { useFetch } from '../../hooks';

export default () => {
    const [getData, data, loading, error] = useFetch({ url: '/api/get-data' });

    useLayoutEffect(() => {
        getData({
            params: {
                table: 'user-rates',
            },
        });
    }, []);

    return (
        <>
            <Card style={{ marginBottom: '2rem' }}>
                <Title>Оценки пользователей</Title>
            </Card>
            <Card>
                {loading && <div style={{ textAlign: 'center' }}>Загрузка данных...</div>}
                {data?.length > 0 && !loading && !error && (
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Название компании</TableCell>
                                <TableCell>Оценки пользователей</TableCell>
                                <TableCell>Дата анализа</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map(({ name, rate, date }, idx) => (
                                <TableRow key={`${name}${idx}`}>
                                    <TableCell>{name}</TableCell>
                                    <TableCell>{rate}</TableCell>
                                    <TableCell>{date}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                )}
                {error && <div style={{ textAlign: 'center', color: 'red' }}>Что-то пошло не так</div>}
            </Card>
        </>
    );
};
