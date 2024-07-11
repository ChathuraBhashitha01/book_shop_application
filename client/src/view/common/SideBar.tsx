import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

export const SideBar = () => {
    return (
        <Sidebar className="w-25 h-[93.2%] bg-blue-600 shadow-md ">
            <Menu>
                <SubMenu label="Charts" className="border bg-blue-600">
                    <MenuItem> Pie charts </MenuItem>
                    <MenuItem> Line charts </MenuItem>
                </SubMenu>
                <MenuItem className="border bg-blue-600"> Documentation </MenuItem>
                <MenuItem className="border bg-blue-600"> Calendar </MenuItem>
            </Menu>
        </Sidebar>
    );
};