import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import icons from '@/ultis/icons';

const { IoIosCheckmarkCircle } = icons;

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/6f34f2fb47f1db60f8c3663b0c20a322~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=0d8843fc&x-expires=1745416800&x-signature=DMeUG4RH4HsV2tdn6ZFZXnwEz9o%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=c1333099&idc=my"
                alt="Tam"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    Tớ là nàng tấm
                    <IoIosCheckmarkCircle className={cx('check')} fill="rgb(32, 213, 236)" />
                </h4>
                <span className={cx('username')}>tamquandeo23</span>
            </div>
        </div>
    );
}

export default AccountItem;
