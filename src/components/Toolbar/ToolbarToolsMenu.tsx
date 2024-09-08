import type { FC } from "react";
import runIcon from "../../assets/toolbar/run.png";
import shareIcon from "../../assets/toolbar/share.png";
import AboutButton from "../../components/About/AboutButton";
import ConfigOpenDialog from "../../components/Config/ConfigOpenDialog";
import { useProject } from "../../hooks/useProject";
import Projects from "./Projects";
import ThemeToggler from "./ThemeToggler";
import ToolbarButton from "./ToolbarButton";

type Props = {
    onRun: () => void;
    onShare: () => void;
    onThemeChange?: (theme: string) => void;
    onProjectReplace?: () => void;
};

const ToolbarToolsMenu: FC<Props> = (props) => {
    const { getProjectMode } = useProject();

    return (
        <ul className="flex flex-row items-center justify-center h-full">
            <li className="h-full">
                <ToolbarButton
                    icon={runIcon}
                    text="Run"
                    onClick={props.onRun}
                    tip="Run Project"
                    keys={["ctrl", "s"]}
                />
            </li>
            {getProjectMode() == "example" && (
                <li className="h-full">
                    <ToolbarButton
                        icon={shareIcon}
                        text="Share"
                        onClick={props.onShare}
                        tip="Share Project"
                    />
                </li>
            )}
            <li className="h-full">
                <ThemeToggler
                    onThemeChange={props.onThemeChange}
                />
            </li>
            <li className="h-full">
                <Projects
                    onProjectReplace={props.onProjectReplace}
                />
            </li>
            <li className="h-full">
                <AboutButton />
            </li>
            <li className="h-full">
                <ConfigOpenDialog />
            </li>
        </ul>
    );
};

export default ToolbarToolsMenu;
