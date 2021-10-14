import * as React from 'react';
import {Paper, Button, IconButton, Avatar} from "@material-ui/core";

import SearchIcon from '@material-ui/icons/Search';
import CreateIcon from '@material-ui/icons/Create';
import MessageIcon from '@material-ui/icons/TextsmsOutlined';
import NotificationsIcon from '@material-ui/icons/NotificationsNoneOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

import styles from './Header.module.scss'

type Props = {};

export const Header: React.FC = (props: Props) => {
    return (
        <Paper className={styles.root} elevation={0}>
            <div className="d-flex align-center">
                <IconButton className="mr-25 ml-5">
                    <MenuIcon/>
                </IconButton>
                <div className={styles.searchBlock}>
                    <SearchIcon/>
                    <input placeholder='Поиск'/>
                </div>
                <Button className={styles.penButton} variant={"contained"} color={"default"}>
                    Новая запись
                    <CreateIcon/>
                </Button>
            </div>
            <div className="d-flex align-center">
                <IconButton>
                    <MessageIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsIcon/>
                </IconButton>
                <Avatar className={styles.avatar}
                        alt="Avatar"
                        src="https://scontent.fiev6-1.fna.fbcdn.net/v/t1.6435-9/242858488_6266408150095814_3397027951914705734_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Md1Lx5EWnlsAX9yUXxy&tn=RgyCo07SZgH2ndsa&_nc_ht=scontent.fiev6-1.fna&oh=360797f110b7d9cd9536eb4dd1d4bf9e&oe=61811C72"/>
                <ArrowDownIcon/>
            </div>
        </Paper>
    );
};