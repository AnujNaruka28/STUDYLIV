export const parseToMinute = (mmss: string) => {
    const [mm="0",ss="0"] = mmss.split(":");
    const m= Number(mm) || 0;
    const s= Number(ss) || 0;
    return (m+(s/60));
};

export const formatMinutes = (totalMinutes: number) => {
    return Math.round(totalMinutes);
}