import React from 'react';
import { WelcomePageProps } from './types';

export default (props: WelcomePageProps) => {
    return (
        <div>
            <header>{props.title}</header>
            {props.children}
        </div>
    )
}
