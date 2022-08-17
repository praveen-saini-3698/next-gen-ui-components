import React from 'react';
import Aside from './Aside';
import './style.scss';
import { SidebarProps } from './types';

export default (props: SidebarProps) => {

    return (
        <div className={`app ${props.toggled ? 'toggled' : ''}`}>
            <Aside {...props} children={undefined} />
            <main>
                {props.children}
            </main>
        </div>
    );
}