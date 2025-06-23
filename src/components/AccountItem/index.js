import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import icons from '@/ultis/icons';
import Image from '@/components/Image';

const { IoIosCheckmarkCircle } = icons;

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/2b473b7c0f68707fc9d4ada63dc4c975~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=1e6fd82c&x-expires=1750860000&x-signature=1RLAm3jj1fTzAXFg8l4wQ411c6M%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
                alt="Tam"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    Nguyễn Bảo Hân
                    <IoIosCheckmarkCircle className={cx('check')} fill="rgb(32, 213, 236)" />
                </h4>
                <span className={cx('username')}>paohan85</span>
            </div>
        </div>
    );
}

export default AccountItem;
