import React from 'react'
import * as formStyle from './row_form.module.css'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import * as style from "../row/row_style.module.css";

export default function RowForm(props) {
    const { initialValues, onSubmitAction, exitAction } = props

    const formik = useFormik({
        initialValues,
        validationSchema: Yup.object({
            title: Yup.string().max(100).required(),
            server: Yup.string().max(100).required(),
            password: Yup.string().max(50),
            expDate: Yup.date().required()
        }),
        onSubmit: onSubmitAction
    })

    return (
        <form onSubmit={formik.handleSubmit} className={'row_simulator'}>
            <div className={
                'cell_simulator ' +
                (formik.errors.title && formik.touched.title
                    ? formStyle.error_cell + ' '
                    : ''
                )
            }>
                <input
                    type='text'
                    id='title'
                    autoComplete='off'
                    className={formStyle.input_table}
                    {...formik.getFieldProps('title')}
                />
            </div>

            <div className={
                'cell_simulator ' +
                (formik.errors.server && formik.touched.server
                        ? formStyle.error_cell + ' '
                        : ''
                )
            }>
                <input
                    type='text'
                    id='server'
                    autoComplete='off'
                    className={formStyle.input_table}
                    {...formik.getFieldProps('server')}
                />
            </div>

            <div className={
                'cell_simulator ' +
                (formik.errors.password && formik.touched.password
                        ? formStyle.error_cell + ' '
                        : ''
                )
            }>
                <input
                    type='password'
                    id='password'
                    autoComplete='off'
                    className={formStyle.input_table}
                    {...formik.getFieldProps('password')}
                />
            </div>

            <div className={
                'cell_simulator ' +
                (formik.errors.expDate && formik.touched.expDate
                        ? formStyle.error_cell + ' '
                        : ''
                )
            }>
                <input
                    type='date'
                    id='expDate'
                    className={formStyle.input_table}
                    {...formik.getFieldProps('expDate')}
                />
            </div>

            <div className={'cell_simulator'}>
                <div className={style.row_action}>
                    <button
                        className={formStyle.save_btn}
                    >&#128190;</button>
                    <button
                        className={formStyle.exit_btn}
                        onClick={exitAction}
                    >&#128711;</button>
                </div>
            </div>
        </form>
    )
}