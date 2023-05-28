import React, { useState } from 'react';

import * as s from './StyledDropDown';

interface ParamProps {
    menuUnit: string;
    menuItems: string[];
}

export default function Dropdown({ menuUnit, menuItems }: ParamProps) {
    const [isValue, setValue] = useState('');

    return (
        <s.DropDown>
            <s.DropDownLabel>{menuUnit}</s.DropDownLabel>
            <s.DropDownGroup
                value={isValue}
                onChange={(e: any) => {
                    setValue(e.target.value);
                }}
                MenuProps={{
                    PaperProps: {
                        style: {
                            maxHeight: 36 * 5 + 8 // item height * itemcount + padding                            width: 'auto'
                        }
                    }
                }}
            >
                {menuItems?.map((menuItem) => {
                    return (
                        <s.DropDownItem key={menuItem} value={menuItem}>
                            {menuItem}
                        </s.DropDownItem>
                    );
                })}
            </s.DropDownGroup>
        </s.DropDown>
    );
}
