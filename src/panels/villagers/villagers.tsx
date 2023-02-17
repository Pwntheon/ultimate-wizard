import { useRecoilState } from 'recoil';
import VillagerState from '@/game/state/atoms/villagersstate';

export default function Villagers() {
    const [villagers] = useRecoilState(VillagerState)
    return (
        <div className={"a"}>
            <div className={"b"}>
                {villagers}
            </div>
        </div>
    );
}