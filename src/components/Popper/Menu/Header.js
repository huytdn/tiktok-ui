import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import icons from '@/ultis/icons';

const cx = classNames.bind(styles);

const { IoIosArrowBack } = icons;

function Header({ title, onBack }) {
    return (
        <header className={cx('header')}>
            <button className={cx('back-btn')} onClick={onBack}>
                <IoIosArrowBack className={cx('icon-back')} />
            </button>
            <h4 className={cx('header-title')}>{title}</h4>
        </header>
    );
}

export default Header;
