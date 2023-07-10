import classNames from 'classnames/bind';
import styles from './User.module.scss';

const cx = classNames.bind(styles);

function User() {
    return <div className={cx('wrap')}>User page</div>;
}

export default User;
