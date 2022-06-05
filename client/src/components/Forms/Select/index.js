import React, { useMemo } from 'react';
import ReactSelect from 'react-select';
import { useField } from 'formik';

export default ({ name, options, disable, isClearable, isSearchable, onChange, label }) => {
    const [field, meta, helpers] = useField(name);
    const mappedOptions = useMemo(() =>
        options.map((item) => ({ label: item.name, value: item.value, isDisabled: !!item.disabled }), [options]),
    );
    const takeValue = (value) => mappedOptions.find((item) => item.value === value)?.name;

    const onSelect = (object) => {
        helpers.setValue(object.value);
        if (onChange instanceof Function) {
            onChange(object.value, object.label);
        }
    };
    return (
        <>
            {label && (
                <label style={{ fontSize: '1.2rem' }} htmlFor={name}>
                    {label}
                </label>
            )}
            <ReactSelect
                name={name}
                value={takeValue(field.value)}
                isDisabled={disable}
                isSearchable={isSearchable}
                isClearable={isClearable}
                options={mappedOptions}
                onChange={onSelect}
                styles={{
                    container: (style) => ({
                        ...style,
                        width: '35%',
                    }),
                }}
            />
        </>
    );
};
