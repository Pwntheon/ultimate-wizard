import { EngineContext } from "@/game/engineprovider";
import VillagersProcessor from "@/game/processors/villagersprocessor";
import { useEngine } from "@/hooks/useengine";
import { useContext } from "react";
import { useRecoilState } from "recoil";
import VillagerState from "../../game/state/atoms/villagersstate";

export default function TempActions() {
    const [_, setVillagers] = useRecoilState(VillagerState);
    const engine = useEngine();

    const addVillager = () => setVillagers(n => n + 1);
    const addProcessor = () => engine.addProcessor(VillagersProcessor);
    
    return (
        <>
            <button onClick={addVillager}>Recruit villager</button>
            <button onClick={addProcessor}>Gather food</button>
        </>
    );
}