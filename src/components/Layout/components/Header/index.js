import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import icons from '@/ultis/icons';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import { Wrapper as PopperWrapper } from '@/components/Popper';
import styles from './Header.module.scss';
import images from '@/assets/images/index';
import AccountItem from '@/components/AccountItem';
import Button from '@/components/Button';
import Menu from '@/components/Popper/Menu';
import { type } from '@testing-library/user-event/dist/type';

const {
    LuSearch,
    IoCloseCircle,
    AiOutlineLoading3Quarters,
    FiMoreVertical,
    CgKeyboard,
    FaRegCircleQuestion,
    TbMessageLanguage,
    GrCloudUpload,
    BiPaperPlane,
    TbMessage2,
    FiUser,
    ImCoinPound,
    FiSettings,
    MdOutlineLogout,
} = icons;

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <TbMessageLanguage />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FaRegCircleQuestion />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <CgKeyboard />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    const currentUser = true;

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //handle change
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FiUser />,
            title: 'View profile',
            to: '/casanov41205',
        },
        {
            icon: <ImCoinPound />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FiSettings />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <MdOutlineLogout />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Tiktok" />
                <HeadlessTippy
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
                </HeadlessTippy>

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <GrCloudUpload />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <BiPaperPlane />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Notify" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <TbMessage2 />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text> Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <img
                                className={cx('user-avatar')}
                                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/410248ffc4234b0bbfa21e383be269bc~tplv-tiktokx-cropcenter:720:720.jpeg?dr=14579&refresh_token=a59b8281&x-expires=1745600400&x-signature=0LeVl%2B4VLNMXYb6bmm7tNXL9Dcw%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
                                alt="Tran Dinh Nhat Huy"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FiMoreVertical className={cx('icon-menu')} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
