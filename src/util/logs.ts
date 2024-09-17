// Debug levels represent how verbose the log is
// 0: Normal log
// 1: Internal and long log
// 2: Ultra internal and long log
export const debug = (level: number = 0, ...msg: string[]) => {
    if (level === 0) {
        console.debug(`%c${msg.join(" ")}`, "color: #ff00ff");
    } else if (level === 1) {
        console.debug(`%c${msg.join(" ")}`, "color: #ff00ff");
    } else if (level === 2) {
        console.trace(`%c${msg.join(" ")}`, "color: #ff00ff");
    }
};
