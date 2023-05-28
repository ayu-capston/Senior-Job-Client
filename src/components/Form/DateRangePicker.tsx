import React, { useState, useEffect, useMemo } from 'react';

import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateValidationError } from '@mui/x-date-pickers/models';

import validationLectureDate from '@utils/validation/lectureDate';
import * as s from './StyledDateRangePicker';

export default function FirstComponent() {
    dayjs.extend(weekday);

    const [isStartDate, setStartDate] = useState(undefined);
    const [isEndDate, setEndDate] = useState(undefined);

    const [error, setError] = useState<DateValidationError | null>(null);

    const errorMessage = useMemo(() => {
        switch (error) {
            case 'maxDate':
            case 'minDate': {
                return '종료일은 시작일로부터 최소 7일 뒤로 설정해주세요.';
            }

            case 'invalidDate': {
                return '유효하지 않은 날짜 형식입니다.';
            }

            default: {
                return '';
            }
        }
    }, [error]);

    useEffect(() => {
        validationLectureDate(isStartDate, isEndDate);
    }, [isStartDate, isEndDate]);

    return (
        <s.DatePickerSection>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label='시작일'
                    value={isStartDate}
                    defaultValue={dayjs()}
                    minDate={dayjs()}
                    onChange={(newValue: any) => setStartDate(newValue)}
                />
                {' ~ '}
                <DatePicker
                    label='종료일'
                    value={isEndDate}
                    defaultValue={dayjs().add(7, 'day')}
                    onError={(newError) => setError(newError)}
                    slotProps={{
                        textField: {
                            helperText: errorMessage
                        }
                    }}
                    minDate={dayjs(isStartDate).add(7, 'day')}
                    onChange={(newValue: any) => setEndDate(newValue)}
                />
            </LocalizationProvider>
        </s.DatePickerSection>
    );
}
