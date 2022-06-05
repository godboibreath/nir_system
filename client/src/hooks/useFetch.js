import { useCallback, useState } from 'react';

export default ({ url = '/', method = 'GET' } = {}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const requestFunction = useCallback(
        async ({ body, params = {} } = {}) => {
            setLoading(true);
            setError(false);
            try {
                const headers = {
                    'Content-Type': 'application/json',
                };
                const requestUrl = new URL(`http://localhost:${process.env.SERVER_PORT || 3000}${url}`);
                if (Object.keys(params).length > 0) {
                    Object.entries(params).forEach(([key, value]) => requestUrl.searchParams.append(key, value));
                }
                const request = await fetch(requestUrl, {
                    mode: 'cors',
                    headers,
                    method,
                    ...(method === 'POST' && body ? { body: JSON.stringify(body) } : {}),
                });
                setLoading(false);
                if (request.status < 200 || request.status >= 500) {
                    setError(true);
                } else {
                    const requestData = await request.json();
                    setData(requestData);
                }
            } catch (e) {
                console.error(e.message);
                setError(true);
                setLoading(false);
                setData(null);
            }
        },
        [url],
    );

    return [requestFunction, data, loading, error];
};
