import React from 'react';

import { ReactComponent as ArrowIcon } from '@images/icon-24-arrow.svg';

import * as s from './StyledContentHeader';

// 대분류 > 중분류 > 소분류
export default function ContentHeader(param: Array<string>) {
    const jsonString: string = JSON.stringify(Object.values(param));
    const stringArray: Array<string> = JSON.parse(jsonString);
    return (
        <>
            <s.contentHeader>
                {stringArray?.map((item: string, index: number) =>
                    index % 2 ? (
                        <>
                            <ArrowIcon />
                            <p key={item}>{item}</p>
                        </>
                    ) : (
                        <p key={item}>{item}</p>
                    )
                )}
            </s.contentHeader>
        </>
    );
}
