import React from 'react';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';
import { SidebarContentOptions, SidebarProps } from './types';

const ConvertItems = ({ items, selected, setSelectedItem }: { items: Array<SidebarContentOptions>, selected: string, setSelectedItem: (item: string) => void }) => {
    return (
        <Menu iconShape="circle">
            {items.map(item => {
                if (item.submenu?.length) {
                    return <Menu iconShape="circle">
                        <SubMenu
                            title={item.label}
                            prefix={item.prefix}
                            suffix={item.suffix}
                            icon={item.icon}
                        >
                            {<ConvertItems items={item.submenu} selected={selected} setSelectedItem={setSelectedItem} />}
                        </SubMenu>
                    </Menu>;
                }
                return <MenuItem
                    icon={item.icon}
                    suffix={item.suffix}
                    onClick={e => {
                        setSelectedItem(item.key as string);
                        return item.onClick ? item.onClick(e, item) : undefined
                    }}
                    className={selected === item.key ? 'selected' : ''}
                >
                    {item.label}
                </MenuItem>
            })}
        </Menu>
    );
}

const Aside = (props: SidebarProps) => {
    const [selectedItem, setSelectedItem] = React.useState<string>("home");
    return (
        <ProSidebar
            collapsed={props.collapsed}
            breakPoint="md"
        >
            {props.title && <SidebarHeader>
                <div
                    style={{
                        padding: '24px',
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                        fontSize: 14,
                        letterSpacing: '1px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                    }}
                >
                    {props.title}
                </div>
            </SidebarHeader>}

            <SidebarContent>
                {props.content?.length ? <ConvertItems items={props.content} selected={selectedItem} setSelectedItem={setSelectedItem} /> : undefined}
            </SidebarContent>

            {props.footer && <SidebarFooter style={{ textAlign: 'center' }}>
                <div>
                    {props.footer}
                </div>
            </SidebarFooter>}
        </ProSidebar>
    );
};

export default Aside;