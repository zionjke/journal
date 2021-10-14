import * as React from 'react';
import {Paper, Typography} from "@material-ui/core";
import Image from "next/image";
import styles from './Post.module.scss'

type Props = {

};
export const Post = (props: Props) => {
    return (
        <Paper className="p-20 mb-15" elevation={1}>
            <Typography variant={"h4"} className={styles.title}>
                Вятский квас» против «Мужского государства»: бренд отказался от компромисса после критики
                рекламы с темнокожим
            </Typography>
            <Typography className="mt-10 mb-15">
                В соцсетях производителей кваса теперь ставят в пример после резонансных ситуаций вокруг
                «Вкусвилла» и других брендов.
            </Typography>
            <Image
                height={400}
                width={600}
                src={"https://www.kamis-pripravy.ru/upload/medialibrary/263/2635e282e1ad56088aa5c22bef6a7ff9.jpg"}/>
        </Paper>
    );
};