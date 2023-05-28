// import styled from 'styled-components';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const DropDown = styled(FormControl)({
    width: '200px',
    height: '50px',
    size: 'small'
});

const DropDownLabel = styled(InputLabel)({
    fontFamily: 'SpoqaHanSansNeoMedium',
    fontSize: '14px',
    backgroundColor: '#fff'
});

const DropDownGroup = styled(Select)({
    fontFamily: 'SpoqaHanSansNeoMedium',
    fontSize: '14px'
});

const DropDownItem = styled(MenuItem)({
    fontFamily: 'SpoqaHanSansNeoMedium',
    fontSize: '14px'
});

export { DropDown, DropDownLabel, DropDownGroup, DropDownItem };
