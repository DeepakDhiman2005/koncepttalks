import { ABILITY_CONFIG } from "../configs/ability";

const useAbility = () => {
    const abilities = ABILITY_CONFIG;
    
    const can = (ability = "", name = "") => {
        try {
            return abilities[ability][name];
        }catch(err){
            console.error("Error: useAbility `can` function error!", err);
            throw new Error("data not found!")
        }
    }

    return {
        can,
        abilities,
    }
}

export default useAbility;