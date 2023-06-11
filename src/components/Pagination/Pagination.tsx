import React from 'react';

import * as s from './StyledPagination';

const Pagination = () => {
    return (
        <s.Pagination>
            <s.pageButton selected>
                <span>1</span>
            </s.pageButton>
            <s.pageButton>
                <span>2</span>
            </s.pageButton>
            <s.pageButton>
                <span>3</span>
            </s.pageButton>
            <s.pageButton>
                <span>4</span>
            </s.pageButton>
            <s.pageButton>
                <span>5</span>
            </s.pageButton>
            <s.pageButton>
                <span>...</span>
            </s.pageButton>
            <s.pageButton>
                <span>10</span>
            </s.pageButton>
        </s.Pagination>
    );
};

export default Pagination;
