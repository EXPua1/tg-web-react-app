import React from 'react';
import Button from "../Button/Button";

const Header = () => {
    const tg = window.Telegram.Webapp;



    const onClose = () =>{
        tg.close()
    }
    return (
        <div className={'header'}>
            <Button onClick = {onClose()}>Закрыть</Button>
            <span>className = {'username'}>
                {tg.initDataUsfafe?.user?.username}
            </span>
        </div>
    );
};

export default Header;