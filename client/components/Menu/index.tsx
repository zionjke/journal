import * as React from 'react';
import styles from './Menu.module.scss'

import FireIcon from '@mui/icons-material/WhatshotOutlined';
import MessageIcon from '@mui/icons-material/SmsOutlined';
import RatingIcon from '@mui/icons-material/TrendingUp';
import ListIcon from '@mui/icons-material/FormatListBulletedOutlined';

import {Button} from "@material-ui/core";


type Props = {};

export const Menu: React.FC = (props: Props) => {
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
    };

    return (
        <div className={styles.menu}>
            <ul>
                <li>
                    <Button>
                        <FireIcon/>
                        Лента
                    </Button>
                </li>
                <li>
                    <Button>
                        <MessageIcon/>
                        Сообщения
                    </Button>
                </li>
                <li>
                    <Button>
                        <RatingIcon/>
                        Рейтинг
                    </Button>
                </li>
                <li>
                    <Button>
                        <ListIcon/>
                        Подписки
                    </Button>
                </li>
            </ul>
        </div>
    );
};