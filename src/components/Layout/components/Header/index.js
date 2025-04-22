import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '@/assets/images/index';
import icons from '@/ultis/icons';

const { LuSearch, IoCloseCircle, AiOutlineLoading3Quarters } = icons;

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Tiktok" />
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
                <div className={cx('actions')}></div>
            </div>
        </header>
    );
}

export default Header;
