import { useRecoilState } from 'recoil';
import FoodState from '../../game/state/atoms/foodstate';
import classes from '@/styles/panel.module.css';

export default function Villagers() {
    const [food] = useRecoilState(FoodState)
    return (
        <div className={classes.container}>
            <div className={classes.data}>
                {food}
            </div>
        </div>
    );
}