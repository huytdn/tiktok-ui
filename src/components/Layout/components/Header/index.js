import classNames from 'classnames/bind';
import icons from '~/ultis/icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import styles from './Header.module.scss';
import images from '~/assets/images/index';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { UploadIcon, MessageIcon, InboxIcon } from '~/components/icons/index';
import Image from '~/components/Image';
import Search from '../Search';
import { Link } from 'react-router-dom';
import routesConfig from '~/config/routes';

const {
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
    const currentUser = true;

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
                <Link to={routesConfig.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                <Search />

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
                                    <span className={cx('badge')}>12</span>
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
                                fallback="https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-1/465279752_1701391183988938_8218705470512898222_n.jpg?stp=dst-jpg_s120x120_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_ohc=d5X_RNMcVf8Q7kNvwGfKf56&_nc_oc=AdmW5azrLMNkAFx-BMOLzieo5-c9Y8qJgBwjRsNYajGQDqs2WJ6581MK570pqwsznccn3RO-1vOjvN-vSXMBk3r2&_nc_zt=24&_nc_ht=scontent.fhan15-2.fna&_nc_gid=__SW9EM8SB9P2KTGVDvqnA&oh=00_AfO2CCJcaifBmECiimQCux0eTZXEQEXGARYL0Ade-1wMFw&oe=685F38DE"
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
