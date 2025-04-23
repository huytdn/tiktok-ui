import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import icons from '@/ultis/icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import { Wrapper as PopperWrapper } from '@/components/Popper';
import styles from './Header.module.scss';
import images from '@/assets/images/index';
import AccountItem from '@/components/AccountItem';
import Button from '@/components/Button';
import Menu from '@/components/Popper/Menu';

const {
    LuSearch,
    IoCloseCircle,
    AiOutlineLoading3Quarters,
    FiMoreVertical,
    CgKeyboard,
    FaRegCircleQuestion,
    TbMessageLanguage,
} = icons;

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: TbMessageLanguage,
        title: 'English',
    },
    {
        icon: FaRegCircleQuestion,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: CgKeyboard,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Tiktok" />
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck={false} />
                        <button className={cx('clear')}>
                            <IoCloseCircle />
                        </button>
                        <AiOutlineLoading3Quarters className={cx('loading')} />

                        <button className={cx('search-btn')}>
                            <LuSearch />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    <Button text> Upload</Button>
                    <Button primary>Log in</Button>

                    <Menu items={MENU_ITEMS}>
                        <button className={cx('more-btn')}>
                            <FiMoreVertical className={cx('icon-menu')} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
