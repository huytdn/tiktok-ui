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
import { UploadIcon, MessageIcon, InboxIcon } from '@/components/icons/index';
import Image from '@/components/Image';

const {
    LuSearch,
    IoCloseCircle,
    AiOutlineLoading3Quarters,
    FiMoreVertical,
    CgKeyboard,
    FaRegCircleQuestion,
    TbMessageLanguage,
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
                                    <UploadIcon className={cx('upload-icon')} />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon className={cx('message-icon')} />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Notify" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon className={cx('inbox-icon')} />
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
                            <Image
                                className={cx('user-avatar')}
                                src="https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-1/465279752_1701391183988938_8218705470512898222_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_ohc=Jdmrr4WhtRcQ7kNvwGY3t9g&_nc_oc=Adl311TN_DPJ-mBoPtSEiKdz39sm1PiG2CkDv17t3jC4d61K_HCqsAP9VfG5zV6fgT-AlkuBR3A0KFYsHK3IP6Qh&_nc_zt=24&_nc_ht=scontent.fhan15-2.fna&_nc_gid=Qft8ikKdPPcC1Nlv4IWSvw&oh=00_AfHoCJ5hm4HAKtkqtIKNJK9O3flOJOqjQDxMD5g1KbPfwQ&oe=68136A9E"
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
