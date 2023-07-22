import React, { useState, useEffect, useMemo } from 'react';

import dayjs, { Dayjs } from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DatePicker, DateValidationError } from '@mui/x-date-pickers';

import * as s from './StyledDateRangePicker';

interface ParamProps {
    onChange: (value: any) => void;
}

const theme = createTheme({
    components: {
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    fontSize: '1.6rem'
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    fontSize: '1.6rem'
                }
            }
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    '&.MuiDayCalendar-weekDayLabel': {
                        fontSize: '1.4rem'
                    }
                }
            }
        },
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    '&.MuiPickersDay-root': {
                        fontSize: '1.4rem'
                    }
                }
            }
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    fontSize: '1.2rem'
                }
            }
        }
    }
});

export default function DateRangePicker(props: ParamProps) {
    dayjs.extend(weekday);

    const [isDate, setDate] = React.useState<Dayjs | null>(dayjs());

    useEffect(() => {}, [isDate]);

    return (
        <s.DatePickerSection>
            <ThemeProvider theme={theme}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label='마감일'
                        value={isDate}
                        minDate={dayjs()}
                        onChange={(newValue: any) => {
                            setDate(newValue.$d);
                            props.onChange(newValue.$d);
                        }}
                    />
                </LocalizationProvider>
            </ThemeProvider>
        </s.DatePickerSection>
    );
}
