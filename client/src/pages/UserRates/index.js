import React, { useLayoutEffect, useState } from 'react';
import { Table, TableCell, TableRow, TableHead, TableBody } from '@mui/material';
import { Card, Title } from '../../components';

export default () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    useLayoutEffect(() => {
        const loadData = async () => {
            try {
                const request = await fetch('http://localhost:5005/api/get-data');
                const jsonData = await request.json();
                setData(jsonData);
            } catch (e) {
                console.error(e.message);
                setError(true);
            }
            setLoading(false);
        };
        loadData();
    }, []);
    return (
        <>
            <Card style={{ marginBottom: '2rem' }}>
                <Title>Оценки пользователей</Title>
            </Card>
            <Card>
                {loading && <div style={{ textAlign: 'center' }}>Загрузка данных...</div>}
                {data.length > 0 && !loading && !error && (
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Название компании</TableCell>
                                <TableCell>Показатель конкурентоспособности</TableCell>
                                <TableCell>Дата анализа</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map(({ name, competitive, date }, idx) => (
                                <TableRow key={`${name}${idx}`}>
                                    <TableCell>{name}</TableCell>
                                    <TableCell>{+competitive / 5.0}</TableCell>
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
