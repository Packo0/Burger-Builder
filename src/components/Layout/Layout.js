import React from 'react';

import Wrapper from '../../hoc/WrapperElement';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
    <Wrapper>
        <Toolbar />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Wrapper>
);

export default layout;
