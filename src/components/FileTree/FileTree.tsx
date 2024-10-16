import { View } from "../UI/View";
import { FileFold } from "./FileFold";

export const FileTree = () => {
    return (
        <View direction={"column"} justify="between" height="full">
            <View direction={"column"} padding={2} gap={2}>
                <FileFold
                    level={1}
                    title="Scenes"
                    folder="scenes"
                    kind="scene"
                    toolbar
                />
                <FileFold
                    folder="root"
                    level={0}
                />
            </View>

            <View direction="column" padding={2} gap={2}>
                <ul className="flex flex-col font-bold">
                    <li className="link link-primary">
                        <a
                            href="https://github.com/kaplayjs/kaplayground/wiki"
                            target="_blank"
                        >
                            Wiki (?)
                        </a>
                    </li>
                    <li className="link link-primary">
                        <a href="https://kaplayjs.com" target="_blank">
                            KAPLAY Docs
                        </a>
                    </li>
                    <li className="link link-primary">
                        <a
                            href="https://discord.com/invite/aQ6RuQm3TF"
                            target="_blank"
                        >
                            Discord
                        </a>
                    </li>
                    <li className="text-primary">
                        <kbd className="kbd kbd-xs">ctrl</kbd> +{" "}
                        <kbd className="kbd kbd-xs">s</kbd> to run
                    </li>
                </ul>
            </View>
        </View>
    );
};
