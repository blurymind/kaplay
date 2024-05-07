import { useRef, useState } from "react";
import { compressCode, decompressCode } from "../util/compressCode";
import Editor, { type EditorRef } from "./Editor/Editor";
import GameView, { type GameViewRef } from "./GameView";
import Header from "./Header";
import Tabs from "./Tabs/Tabs";
import { darkThemes } from "./ThemeToggler";

function Playground() {
    const [code, setCode] = useState<string>("");
    const editorRef = useRef<EditorRef>(null);
    const gameViewRef = useRef<GameViewRef>(null);

    const handleRun = () => {
        const code = editorRef.current?.getValue();

        if (code) {
            setCode(code);
            gameViewRef.current?.run(code);
            setTimeout(() => {
                editorRef.current?.focus();
            }, 1000);
        }
    };

    const handleShare = () => {
        const code = editorRef.current?.getValue();
        const url = new URL(window.location.href);
        url.searchParams.set("code", compressCode(code ?? "") || "");
        navigator.clipboard.writeText(url.toString());
    };

    const handleThemeChange = (theme: string) => {
        const isDarkTheme = darkThemes.includes(theme);
        let newTheme = isDarkTheme ? "vs-dark" : "vs-light";

        editorRef.current?.setTheme(newTheme);
    };

    return (
        <div className="flex flex-col h-full">
            <Header
                run={handleRun}
                onThemeChange={handleThemeChange}
                onShare={handleShare}
            />
            <main className="flex flex-col-reverse md:flex-row">
                <div className="flex-1 flex flex-col max-h-[50%] md:max-h-none md:max-w-[50%]">
                    <Editor
                        ref={editorRef}
                        onRun={handleRun}
                        onMount={handleRun}
                    />
                    <Tabs />
                </div>

                <div className="flex-1 flex max-h-[50%] md:max-h-none md:max-w-[50%] ">
                    <GameView code={code} ref={gameViewRef} />
                </div>
            </main>
        </div>
    );
}

export default Playground;
