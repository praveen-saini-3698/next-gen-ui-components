import React from 'react';
import styles from './index.module.scss';
import { FormBuilderProps } from './types';
import GenericComponent from '../GenericComponent';
export default (props: FormBuilderProps) => {

    const [form, setForm] = React.useState<Record<string, any | null>>({});
    const [formSchema, setFormSchema] = React.useState<Record<string, any | null>>({});
    const [initializing, setFormInitializing] = React.useState<boolean>(true);

    React.useEffect(() => {
        props.schema.forEach(field => field.name ? form[field.name] = field.value ?? (props?.initialValue ? props.initialValue[field.name] : '') ?? '' : undefined);
        setFormSchema({ ...form });
        setFormInitializing(false);
    }, []);

    const onValueChange = (name: string, value: string | number | boolean | Date | null) => {
        setForm({ ...form, [name]: value });
    };

    return (
        <div className={styles['form-builder']}>
            {props.title && <div className={styles['form-title']}>
                <h2>{props.title}</h2>
            </div>}
            {!initializing && <form onSubmit={e => { e.preventDefault(); if (props.onSubmit) props.onSubmit(e, form); }} onReset={() => setForm({ ...formSchema })}>
                <div className={styles['form-container']}>
                    {props.schema.map((field, index) => <GenericComponent {...field} key={index} value={form[field.name as string]} onChange={e => onValueChange(field.name as string, e.target.value)} />)}
                </div>
                <div className={styles['form-actions']}>
                    <GenericComponent type="submit" />
                    <GenericComponent type="reset" />
                </div>
            </form>}
        </div>
    );
};